import React, { useContext } from "react";
import { ToDoContext } from "../Contexts/ToDoContext";
import { ToDoContextType } from "../Contexts/ToDoContextType";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos } = useContext<ToDoContextType>(ToDoContext);

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefas</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}></TodoListItem>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
