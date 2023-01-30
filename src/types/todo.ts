
export enum TodoActionTypes {
    FETCH_TODO='FETCH_TODO',
    FETCH_TODO_SUCCESS='FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR='FETCH_TODO_ERROR',
    SET_PAGE='SET_PAGE',
    DELETE_TODO='DELETE_TODO',
    DONE_TODO='DONE_TODO',
}

export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    limit: number,
    page: number
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO,
}

interface FetchTodoActionSuccess {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}

interface DeleteAction {
    type: TodoActionTypes.DELETE_TODO,
    payload: number
}

interface DoneAction {
    type: TodoActionTypes.DONE_TODO,
    payload: number
}
interface FetchTodoActionError {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: null | string
}

interface SetPageAction {
    type: TodoActionTypes.SET_PAGE,
    payload: number
}

export type todoAction = DoneAction | DeleteAction | SetPageAction | FetchTodoAction | FetchTodoActionError | FetchTodoActionSuccess
