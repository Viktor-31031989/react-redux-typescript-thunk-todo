import {Dispatch} from "react";
import axios from "axios";
import {todoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodoAction = (page=1, limit = 15) => {
    return async(dispatch:Dispatch<todoAction>) => {
        try{
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
                {params: {_page: page, _limit: limit}})
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        } catch {
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'fetch error'})
        }
    }
}

export function setTodoPage(page: number): todoAction {
    return {type: TodoActionTypes.SET_PAGE, payload: page}
}

export function deleteHandler(id: number): todoAction {
    return {type: TodoActionTypes.DELETE_TODO, payload: id}
}

export function doneHandler(id: number): todoAction {
    return {type: TodoActionTypes.DONE_TODO, payload: id}
}
