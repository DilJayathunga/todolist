import { Button, Dialog, DialogContent, IconButton, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './AddTodo.module.css'
import { useCreateTodoMutation } from '../Store/apiSlice';
import { toast } from "react-toastify";

const schema = yup.object({
    title:yup.string().required(""),
  }).required();

const AddTodo = ({open, onClose}) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onFormClose = () => {
        onClose()
        reset()
    }

    const [addTodo] = useCreateTodoMutation();

    const onSubmit = async (data) => {
        try {
            const respond = await addTodo(data).unwrap();
            console.log('add Todo', respond)
            toast.success("Todo successfully added!");
            onFormClose();
        } catch (err) {
            console.error("Failed to save todo: ", err);
            toast.error("Erorr, something went wrong!");
        }
    };

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="sm"
        >
            <DialogContent className={styles.dialog}>
                <div className={styles.headingContainer}>
                    <Typography fontWeight={600} variant={"h6"}>
                        Add New Todo
                    </Typography>
                    <IconButton className={styles.closeButton} onClick={() => onFormClose()}>
                        <Close />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel}>Title</label>
                        <OutlinedInput
                            className={styles.formInput}
                            {...register("title")}
                            size="small"
                            fullWidth
                            placeholder="Add Title"
                            error={!!errors.title}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel}>Description</label>
                        <OutlinedInput
                            className={styles.formInput}
                            {...register("description")}
                            size="small"
                            fullWidth
                            placeholder="Add Description"
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            type="submit"
                            className={styles.submitButton}
                            variant="contained"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTodo