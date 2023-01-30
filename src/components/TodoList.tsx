import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useSelectorHook";
import {deleteHandler, doneHandler, fetchTodoAction, setTodoPage} from "../store/actions/todoAction";
import {useDispatch} from "react-redux";
import './style/user.css'
import './style/todo.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TodoList() {
    const {todos, error, loading, page} = useTypeSelector(state => state.todo)
    const dispatch = useDispatch()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodoAction(page))
    }, [page])
    if (loading) {
        return <h1>...loading</h1>
    }

    if (error) {
        return <h1>error</h1>
    }
    console.log(todos.map(el=>el.completed))
    return (
        <div className='todo-container'>
            <div>
                {todos.map(todo => (
                    <div key={todo.id} className='todo-section'>
                        <div onClick={() => dispatch(doneHandler(todo.id))} style={{textDecorationLine: todo.completed ? 'line-through':''}}>{todo.title}</div>
                       <DeleteForeverIcon onClick={() => dispatch(deleteHandler(todo.id))} className='deleteButton'/>
                    </div>

                ))}
            </div>
            <div style={{display: 'flex', textAlign: 'center'}}>
                {pages.map(p => (
                    <div onClick={() => dispatch(setTodoPage(p))}
                         style={{border: page === p ? '2px solid green' : '1px solid grey', padding: '10px'}}>
                       <div >{p}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
