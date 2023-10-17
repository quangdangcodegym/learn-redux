/*
    Nếu chưa cài redux toolkit thì phải cài thư viện reselect, nếu cài rồi thì import trực tiếp từ toolkit luôn
*/
// import { createSelector } from 'reselect';

import { createSelector } from '@reduxjs/toolkit';
// Step1: lấy all
// export const todoListSelector = (state)=>state.todoList;

// Step2: lấy danh sách loại theo searchText
// export const todoListSelector = (state)=> {
//     const todoRemaining = state.todoList.filter((todo)=>{
//         return todo.name.includes(state.filters.search);
//     })
//     return todoRemaining;
// };

// Step3: Lồng các selector basic
// export const todoListSelector = (state)=> {
//     const searchText = searchTextSelector(state);
//     const todoRemaining = state.todoList.filter((todo)=>{
//         return todo.name.includes(searchText);
//     })
//     return todoRemaining;
// };

// export const searchTextSelector = (state)=>state.filters.search;


// Step3:  sử dụng createSelector để lấy Selector
//npm i reselect
// export const searchTextSelector = (state)=>state.filters.search;
// export const todoListSelector = (state)=>state.todoList;

// export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText)=>{
//     return todoList.filter((todo)=>{
//         return todo.name.includes(searchText);
//     })
// })


// Step4:  sử dụng kết hợp status selector
//npm i reselect

export const searchTextSelector = (state) => {
    console.log(state);
    return state.filters.search;
}
export const filterSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(todoListSelector, filterSelector, searchTextSelector, prioritySelector, (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
        if (status == 'All') {
            return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText);
        }
        return todo.name.includes(searchText) &&
            (status !== 'All' && status === 'Completed' ? todo.completed : !todo.completed)
            && (priorities.length ? priorities.includes(todo.priority) : true);
    })
})


