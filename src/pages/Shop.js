import React from 'react';
import {Container, Grid} from "@mui/material";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container sx={{pt: 3}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={3}>
                    <TypeBar/>
                </Grid>
                <Grid item xs={9}>
                    <DeviceList/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Shop;