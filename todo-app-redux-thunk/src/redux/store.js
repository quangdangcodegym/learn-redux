import { configureStore, createSlice } from '@reduxjs/toolkit';
// import filtersSlice from './../components/Filters/filtersSlice';
import todoListSlice from './../components/TodoList/todoListSlice';
import thunk from 'redux-thunk';


const store = configureStore({
    reducer: {
        // filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;