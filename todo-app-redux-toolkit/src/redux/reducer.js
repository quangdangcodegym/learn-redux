import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from '../components/TodoList/TodosSlice';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})
/**
 *  Chưa sử dụng combineReducers
const rootReducer = (state= {}, action)=>{
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action)
    }

}
 */
export default rootReducer;


/** Chưa tách root reducer
const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1,name: 'Learn yoga', completed: false, priority: 'Medium'},
        {id: 2,name: 'Learn React', completed: false, priority: 'High'},
        {id: 3,name: 'Learn Java', completed: false, priority: 'Low'},
        {id: 4,name: 'Learn C#', completed: false, priority: 'High'},
    ]
    
}

const rootReducer = (state = initState, action)=>{

    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    // {id: 4,name: 'Learn C#', completed: false, priority: 'High'}
                    action.payload
                ]
            }

        case 'filter/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }

}
export default rootReducer;

 */