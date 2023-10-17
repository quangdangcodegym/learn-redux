
/**
    //Tạo như vậy là đang tạo action cứng
    export const addTodoAction = {
        type: 'todoList/addTodo',
        payload: {id: 4,name: 'Learn C#', completed: false, priority: 'High'}
    }
 */

// action creator => function

export const addTodo = (data)=>{
    return {
        type: 'todoList/addTodo',
        // data là 1 object
        // payload: {id: 4,name: 'Learn C#', completed: false, priority: 'High'}
        payload: data
    }
}
export const toggleTodoStatus = (todoId)=>{
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const searchFilterChange = (text)=>{
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status)=>{
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities)=>{
    return {
        type: 'filters/priorityFilterChange',
        payload: priorities
    }
}

