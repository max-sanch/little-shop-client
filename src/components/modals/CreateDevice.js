import React, {useContext, useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    FormControl, Grid,
    InputAdornment,
    Modal,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {Context} from "../../index";

function returnParam(param) {
    return {label: param.name, id: param.id};
}

const CreateDevice = ({open, setOpen}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', value: '', number: Date.now()}])
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    };

    const types = device.types.map(returnParam);
    const brands = device.brands.map(returnParam);

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
                width: 550
            }}>
                <CardContent>
                    <Typography id="" variant="h5" align='center'>
                        Добавить дивайс
                    </Typography>
                    <FormControl sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <Autocomplete
                            required
                            disablePortal
                            id="type"
                            options={types}
                            size="small"
                            sx={{mt: 3}}
                            renderInput={(params) => <TextField {...params} label="Тип *" />}
                        />

                        <Autocomplete
                            required
                            disablePortal
                            id="brand"
                            options={brands}
                            size="small"
                            sx={{mt: 2}}
                            renderInput={(params) => <TextField {...params} label="Броенд *" />}
                        />

                        <TextField
                            required
                            id="name"
                            label="Название"
                            size="small"
                            sx={{mt: 2}}
                        />

                        <TextField
                            required
                            id="price"
                            aria-valuemin={0}
                            type="number"
                            label="Цена"
                            size="small"
                            sx={{mt: 2}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">руб</InputAdornment>,
                            }}
                        />

                        <Button
                            variant="outlined"
                            component="label"
                            sx={{my: 2}}
                        >
                            Загрузить изображение
                            <input
                                required
                                type="file"
                                id="img"
                                hidden
                            />
                        </Button>

                        {/*<TextField*/}
                        {/*    required*/}
                        {/*    id="img"*/}
                        {/*    type="file"*/}
                        {/*    size="small"*/}
                        {/*    sx={{mt: 2}}*/}
                        {/*/>*/}

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 1
                        }}>
                            <Typography variant="subtitle1">
                                Свойства:
                            </Typography>

                            <Button
                                variant="outlined"
                                onClick={addInfo}
                            >
                                <AddIcon fontSize="small"/>
                            </Button>
                        </Box>

                        {info.length === 0 ?
                            <Typography variant="h6" align="center">
                                Без свойств
                            </Typography>
                            :
                            info.map(i =>
                                <Grid container key={i.number} sx={{mt: 1}}>
                                    <Grid item md={5}>
                                        <TextField
                                            id={"name-info-" + i.number}
                                            label="Название"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item md={5}>
                                        <TextField
                                            id={"name-info-" + i.number}
                                            label="Значение"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item md={2} sx={{py: 'auto'}}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => removeInfo(i.number)}
                                            color="error"
                                            sx={{width: '100%', height: '100%'}}
                                        >
                                            <DeleteOutlineIcon/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            )
                        }

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 3
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

export default CreateDevice;