import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const loadTodoAPI = createAsyncThunk(
    'todoList/loadTodoAPI',
    async (data, { rejectWithValue }) => {
        // Gọi lên API backend
        try {
            console.log("Loading Todo API");
            const response = await axios.get(`https://652eb1940b8d8ddac0b1c72e.mockapi.io/todo`);
            return response.data;
        } catch (error) {
            // Bạn có thể xử lý lỗi ở đây
            console.log("Loading Todo  API error: " + error);
            return rejectWithValue({ error: error.message });
        }
    }
);
export const addTodoAPI = createAsyncThunk(
    'todoList/addTodoAPI',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://652eb1940b8d8ddac0b1c72e.mockapi.io/todo', data);
            return response.data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }

    }
);

export default createSlice({
    name: 'todoList',
    initialState: {
        todos: [],
        loading: 'idle',
        error: 'error'
    },
    reducers: {

    },
    extraReducers:
        (builder) => {
            builder
                .addCase(loadTodoAPI.pending, (state, actions) => {
                    // state.loading = 'pending';
                })
                .addCase(loadTodoAPI.fulfilled, (state, action) => {
                    // console.log("action", action);
                    state.todos = action.payload;
                    // state.loading = 'idle';

                    console.log("loadTodoAPI fulfilled state", state.loading);
                    console.log("loadTodoAPI fulfilled action", action);
                    return state;
                })
                .addCase(loadTodoAPI.rejected, (state, action) => {
                    console.log("error", action);
                    state.loading = 'idle';
                    state.error = action.payload.error;
                })
                .addCase(addTodoAPI.fulfilled, (state, action) => {
                    console.log("ACTION", action);
                    state.todos.push(action.payload);
                    // state.loading = 'idle';
                    return state;
                })
                .addCase(addTodoAPI.rejected, (state, action) => {
                    console.log("error", action);
                    // state.loading = 'idle';
                    // state.error = action.payload.error;
                });
        },
});