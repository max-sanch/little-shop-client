import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {useLinkClickHandler} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Unauthorized = () => {
    const clickToLogin = useLinkClickHandler(LOGIN_ROUTE);

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: window.innerHeight - 50
        }}>
            <Typography variant="h4" align={"center"} sx={{mt: 2}}>401 Не авторизован!</Typography>
            <Typography variant="body1" align={"center"} sx={{mt: 2}}>Для доступа к данной странице необходимо авторизоваться.</Typography>
            <Button
                variant="outlined"
                onClick={clickToLogin}
                sx={{mt: 2}}
            >
                Войти
            </Button>
        </Container>
    );
};

export default Unauthorized;