import React, { useState } from 'react'
import styles from './TodoList.module.css'
import { Button, Paper, Typography } from '@mui/material'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { useGetAllTodosQuery } from '../Store/apiSlice'

const todos = [
    {id: 1, title: 'test todo', description: 'test description'},
    {id: 2, title: 'test todo', description: 'test description'},
    {id: 3, title: 'test todo', description: 'test description'},
]

const TodoList = () => {

    const [open, setOpen] = useState(false)

    const { data, isSuccess, isLoading } = useGetAllTodosQuery();

    return (
        <Paper className={styles.paper}>
            <div className={styles.container}>
                <Typography fontWeight={600} variant={"h6"}>Todo List</Typography>
                <Button
                    variant='contained'
                    className={styles.add}
                    onClick={()=>setOpen(true)}
                >
                    Add New
                </Button>
            </div>
            <div>
                {isSuccess && data.length !==0 ? data.map(todo => (
                    <Todo key={todo._id} todo={todo} />
                )):
                    <div className={styles.empty}>
                        <Typography>Yay! Nothing to do!</Typography>
                    </div>
                }
            </div>
            <AddTodo open={open} onClose={() => setOpen(false)} />
        </Paper>
    )
}

export default TodoList