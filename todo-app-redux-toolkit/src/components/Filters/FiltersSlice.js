/*
const initState = {
    search: '',
    status: 'All',
    priority: []
}

const filtersReducer = (state = initState, action)=>{

    console.log(state, action);
    switch(action.type){
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filter/priorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }

}
export default filtersReducer;

*/

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        /*
        Tự động tạo 1 action { type: 'filters/searchFilterChange' }
        */
        searchFilterChange: (state, action) => {
            // viết code mutation (immer)
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload;
        }
    }
});