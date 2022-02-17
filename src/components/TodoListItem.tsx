import React, { useContext } from "react";
import { ToDoContext } from "../Contexts/ToDoContext";
import { ToDoContextType } from "../Contexts/ToDoContextType";
import { Todo } from "./models/Todo";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useContext<ToDoContextType>(ToDoContext);
  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  }

  const handleChange = (event: any) => {
    toggle(props.todo);
  }
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input className="uk-checkbox" type="checkbox" checked={props.todo.done} onChange={handleChange} />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}></button>
      </td>
    </tr>
  );
};

export default TodoListItem;
