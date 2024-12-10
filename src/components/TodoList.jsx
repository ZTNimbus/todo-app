/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

function TodoList({ todos, openTab, handleCompleteTodo, handleDeleteTodo }) {
  let filteredTodosList = [];

  if (openTab === "All") filteredTodosList = todos;
  else if (openTab === "Open")
    filteredTodosList = todos.filter((t) => !t.complete);
  else if (openTab === "Completed")
    filteredTodosList = todos.filter((t) => t.complete);

  return (
    <>
      {filteredTodosList.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </>
  );
}

export default TodoList;
