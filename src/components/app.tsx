import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoContext from '../Contexts/ToDoContext';
import AddToDo from './AddToDo';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <ToDoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Routes>
                        <Route path="/new" element={<AddToDo />} />
                        <Route path="/" element={
                            <><h4>My Task List</h4>
                                <TodoList></TodoList></>
                        }>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </ToDoContext>
    );
}

export default App;