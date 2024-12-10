/* eslint-disable react/prop-types */
function Header({ todos }) {
  const todosLength = todos.length;
  const isPlural = todosLength !== 1;

  return (
    <header>
      <h1 className={"text-gradient"}>
        You have {todosLength} open {isPlural ? "tasks" : "task"}
      </h1>
    </header>
  );
}

export default Header;
