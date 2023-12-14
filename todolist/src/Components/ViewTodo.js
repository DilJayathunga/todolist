import { Close } from '@mui/icons-material'
import { Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './ViewTodo.module.css'

const ViewTodo = ({ open, onClose, todo }) => {
    return (
        <Dialog
            open={open}
            fullWidth
            onClose={onClose}
            maxWidth="sm"
        >
            <DialogContent className={styles.dialog}>
                <div className={styles.headingContainer}>
                    <Typography fontWeight={600} variant={"h6"}>
                        Todo Details
                    </Typography>
                    <IconButton className={styles.closeButton} onClick={() => onClose()}>
                        <Close />
                    </IconButton>
                </div>
                <div className={styles.subContainer}>
                    <label className={styles.title}>Title</label>
                    <Typography className={styles.value}>
                        {todo.title}
                    </Typography>
                </div>
                <div className={styles.subContainer}>
                    <label className={styles.title}>Description</label>
                    <Typography className={styles.value}>
                        {todo.description}
                    </Typography>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ViewTodo