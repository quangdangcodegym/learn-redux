
/*
import { createStore } from 'redux';
import rootReducer from './reducer';

import {composeWithDevTools} from '@redux-devtools/extension'

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);


export default store;


*/
/*
    Dùng toolkit thì ko cần
    composeWithDevTools
    ko cần cần bước combine thì rootReducer
*/
import { configureStore, createSlice } from '@reduxjs/toolkit';
import filtersReducer from './../components/Filters/FiltersSlice';
import todoListReducer from './../components/TodoList/TodosSlice';

const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer
    }
});
export default store;