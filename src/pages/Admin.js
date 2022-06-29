import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [openType, setOpenType] = React.useState(false);
    const [openBrand, setOpenBrand] = React.useState(false);
    const [openDevice, setOpenDevice] = React.useState(false);

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 5
        }}>
            <Typography variant='h5'>
                Админ панель
            </Typography>

            <Button
                variant="outlined"
                size="large"
                sx={{mt: 2}}
                onClick={() => setOpenType(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outlined"
                size="large"
                sx={{mt: 2}}
                onClick={() => setOpenBrand(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outlined"
                size="large"
                sx={{mt: 2}}
                onClick={() => setOpenDevice(true)}
            >
                Добавить устройство
            </Button>

            <CreateType open={openType} setOpen={() => setOpenType(false)}/>
            <CreateBrand open={openBrand} setOpen={() => setOpenBrand(false)}/>
            <CreateDevice open={openDevice} setOpen={() => setOpenDevice(false)}/>
        </Container>
    );
};

export default Admin;