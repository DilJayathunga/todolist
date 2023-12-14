import { Check, Delete } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import ViewTodo from './ViewTodo'
import styles from './Todo.module.css'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../Store/apiSlice'

const Todo = ({ todo }) => {

    const [viewOpen, setViewOpen] = useState(false)

    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const onCompleteClick = async (id, complete) => {
        const data = {
            id: id,
            complete: !complete
        }
        try {
            const respond = await updateTodo(data).unwrap();
            console.log('update Todo', respond)
        } catch (err) {
            console.error("Failed to update todo: ", err);
        }
    }

    const onDeleteClick = async (id) => {
        try {
            const respond = await deleteTodo(id).unwrap();
            console.log('delete Todo', respond)
        } catch (err) {
            console.error("Failed to delete todo: ", err);
        }
    }

    return (
        <div className={`${styles.container} ${todo.isComplete && styles.iscomplete}`}>
            <div className={styles.subContainer}>
                <IconButton
                    variant="contained"
                    className={styles.complete}
                    onClick={() => onCompleteClick(todo._id, todo.isComplete)}
                >
                    {todo.isComplete &&<Check />}
                </IconButton>
                <div className={styles.titleContainer} onClick={() => setViewOpen(true)}>
                    <Typography className={todo.isComplete && styles.lineThrough}>{todo.title}</Typography>
                </div>
            </div>
            <div>
                <IconButton aria-label="delete" onClick={() => { onDeleteClick(todo._id) }}>
                    <Delete />
                </IconButton>
            </div>
            <ViewTodo open={viewOpen} onClose={() => {setViewOpen(false)}} todo={todo} />
        </div>
    )
}

export default Todo