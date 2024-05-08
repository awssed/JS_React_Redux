import React from 'react';
import Footer from './Footer';


import AddTodo from "../containers/AddToDo";
import TodoList from "../containers/VisibleToDoList";
import VisibleToDoList from "../containers/VisibleToDoList";


const App = () => (
    <div>
        <AddTodo />
        <VisibleToDoList />
        <Footer />
    </div>
);

export default App;