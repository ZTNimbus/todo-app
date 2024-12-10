/* eslint-disable react/prop-types */
function Tabs({ todos, openTab, setOpenTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className={"tab-container"}>
      {tabs.map((tab, i) => {
        let numOfTasks = 0;

        if (tab === "All") numOfTasks = todos.length;
        else if (tab === "Open")
          numOfTasks = todos.filter((t) => !t.complete).length;
        else if (tab === "Completed")
          numOfTasks = todos.filter((t) => t.complete).length;

        return (
          <button
            key={i}
            className={`tab-button ${tab === openTab ? "tab-selected" : ""}`}
            onClick={() => setOpenTab(tab)}
          >
            <h4>
              {tab}
              <span> ({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}

export default Tabs;
