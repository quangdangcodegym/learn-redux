redux toollkit giúp mình

- const store = configureStore({
  reducer: {
  filters: filtersReducer.reducer,
  todoList: todoListReducer.reducer
  }
  });
  export default store;

- Tạo slice nhanh và dễ hơn gọn hơn, tự động tạo các action cho mình
  export default createSlice({
  name: 'filters',
  initialState: {
  search: '',
  status: 'All',
  priority: []
  },
  reducers: {
  /_
  Tự động tạo 1 action { type: 'filters/searchFilterChange' }
  _/
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
