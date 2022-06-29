import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {useLinkClickHandler} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const NotFound = () => {
    const clickToShop = useLinkClickHandler(SHOP_ROUTE);

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: window.innerHeight - 50
        }}>
            <Typography variant="h4" align={"center"} sx={{mt: 2}}>404 Не найдено!</Typography>
            <Typography variant="body1" align={"center"} sx={{mt: 2}}>Такой страници не существует.</Typography>
            <Button
                variant="outlined"
                onClick={clickToShop}
                sx={{mt: 2}}
            >
                На главную
            </Button>
        </Container>
    );
};

export default NotFound;