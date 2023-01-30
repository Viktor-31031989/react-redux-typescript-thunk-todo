import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../hooks/useSelectorHook";
import {fetchUsersAction} from "../store/actions/userActions";

function UserList() {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsersAction())
    }, [])

    if (loading) {
        return <h1>...Loading</h1>
    }
    if (error) {
        return <h1>error to fetch users</h1>
    }
    console.log(users)

    return (
        <div className='user-container'>
            {users.map(user => (
                <div key={user.id} className='user-info'>
                    <div>{user.name}</div>
                    <div className='phone'>{user.phone}</div>
                </div>

            ))}
        </div>
    );
}

export default UserList;
