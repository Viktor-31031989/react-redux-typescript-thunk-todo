import {UserActions, UserActionTypes} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";

export const fetchUsersAction = () => {
    return async(dispatch:Dispatch<UserActions>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'fetch error'})
        }
    }
}
