import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [openTab, setOpenTab] = useState("Open");

  //Get todos, create todos entry on localStorage if entry does not exist
  const [todos, setTodos] = useState(() => {
    if (!localStorage.getItem("todos"))
      localStorage.setItem(
        "todos",
        JSON.stringify([
          {
            id: 1,
            input: "Hello! Add your first todo!",
            complete: false,
          },
        ])
      );

    return JSON.parse(localStorage.getItem("todos"));
  });

  //Update Todos on local storage on any modification
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);

  function handleAddTodo(e, todoInput) {
    e.preventDefault();

    const newTodo = { id: todos.length + 1, input: todoInput, complete: false };

    setTodos([...todos, newTodo]);
  }

  function handleCompleteTodo(id) {
    setTodos(
      todos.map((todo) => {
        console.log(todo);

        return todo.id === id ? { ...todo, complete: true } : todo;
      })
    );
  }

  function handleDeleteTodo(id) {
    const filteredTodosList = todos.filter((todo) => todo.id !== id);

    const newTodosList = filteredTodosList.map((todo, index) => {
      return { ...todo, id: index };
    });

    setTodos(newTodosList);
  }

  return (
    <>
      <Header todos={todos} />

      <Tabs todos={todos} openTab={openTab} setOpenTab={setOpenTab} />

      <TodoList
        todos={todos}
        openTab={openTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />

      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
