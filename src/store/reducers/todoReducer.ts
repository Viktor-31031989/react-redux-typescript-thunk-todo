import {todoAction, TodoActionTypes, TodoState} from "../../types/todo";
import {fetchTodoAction} from "../actions/todoAction";


const initialState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
}

export const todoReducer = (state: TodoState=initialState, action: todoAction): TodoState=> {
    switch (action.type){
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, error: action.payload}
        case TodoActionTypes.SET_PAGE:
            return {...state, page: action.payload}
        case TodoActionTypes.DELETE_TODO:
            return {...state, todos: state.todos.filter(el => el.id !== action.payload)}
        case TodoActionTypes.DONE_TODO:
            return {...state, todos: state.todos.map(el=> el.id === action.payload ? {...el, completed: !el.completed}:{...el} )}
        default:
            return state;
    }
}
