import { Todo } from "../components/models/Todo";

export interface ToDoContextType {
    todos: Todo[];
    addTodo(title: string): void;
    removeTodo(todo: Todo): void;
    toggle(todo: Todo): void;
}