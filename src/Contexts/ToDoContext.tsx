import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../components/models/Todo";
import { get, save } from "../services/ToDoService";
import { ToDoContextType } from "./ToDoContextType";

export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const ToDoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(get);

    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length + 1, title: title, done: false };
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    }

    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
    }

    return (
        <ToDoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoProvider