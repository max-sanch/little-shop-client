import React from 'react';
import {Box, Button, Card, CardContent, FormControl, Modal, TextField, Typography} from "@mui/material";

const CreateBrand = ({open, setOpen}) => {

    return (
        <Modal
            open={open}
            onClose={setOpen}
            aria-labelledby="modal-modal-title"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Card sx={{
                width: 350
            }}>
                <CardContent>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Добавить бренд
                    </Typography>
                    <FormControl sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Название бренда"
                            size="small"
                            sx={{mt: 2}}
                        />

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2
                        }}>
                            <Button onClick={setOpen}>Закрыть</Button>
                            <Button variant='outlined' onClick={setOpen}>Добавить</Button>
                        </Box>
                    </FormControl>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default CreateBrand;