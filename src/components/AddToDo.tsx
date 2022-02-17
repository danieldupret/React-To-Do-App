import React, { useContext } from 'react';
import { ToDoContext } from '../Contexts/ToDoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToDoContextType } from '../Contexts/ToDoContextType';

const schema = yup.object().shape({
    title: yup.string().required("Invalid Task"),
});

interface AddToDoForm {
    title: string
}

function AddToDo() {
    const { addTodo } = useContext<ToDoContextType>(ToDoContext);
    const { register, handleSubmit, formState: { errors } } = useForm<AddToDoForm> ({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddToDoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = "/";
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>New Task</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" id="title" placeholder="New Task..." className="uk-input" {...register("title")} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Save</button>
            </div>
        </form>
    );
}

export default AddToDo;