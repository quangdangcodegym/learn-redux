/*
const initState = [
        {id: 1,name: 'Learn yoga', completed: false, priority: 'Medium'},
        {id: 2,name: 'Learn React', completed: false, priority: 'High'},
        {id: 3,name: 'Learn Java', completed: true, priority: 'Low'},
        {id: 4,name: 'Learn C#', completed: false, priority: 'High'},
    ]
    

const todoListReducer = (state = initState, action)=>{

    switch(action.type){
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }

}
export default todoListReducer;

*/


import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn React', completed: false, priority: 'High' },
        { id: 3, name: 'Learn Java', completed: true, priority: 'Low' },
        { id: 4, name: 'Learn C#', completed: false, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.filter(t => t.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        }
    }
});