/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

function TodoInput({ handleAddTodo }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  return (
    <form className={"input-container"}>
      <input
        type="text"
        placeholder={"Add Task"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button
        onClick={(e) => {
          if (!input.trim()) return;

          handleAddTodo(e, input);
          setInput("");
          inputRef.current.focus();
        }}
        type={"submit"}
      >
        <i className="fa-solid fa-plus" />
      </button>
    </form>
  );
}

export default TodoInput;
