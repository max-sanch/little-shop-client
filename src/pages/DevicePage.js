import React from 'react';
import {Box, Button, Container, Grid, Rating, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 67000, rating: 4.6, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`};
    const description = [
        {id: 1, title: 'Оперативная память', value: '5 гб'},
        {id: 2, title: 'Камера', value: '12 мп'},
        {id: 3, title: 'Процессор', value: 'Интел 2'},
        {id: 4, title: 'Кол-во ядер', value: '2'},
        {id: 5, title: 'Аккумулятор', value: '4000'},
    ]

    return (
        <Container sx={{pt: 3}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6} width='100%' sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img
                        src={device.img}
                        alt={device.name}
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                </Grid>
                <Grid item md={6} width='100%'>
                    <Box
                        height='100%'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box>
                            <Typography variant="h5" align='center' sx={{mt: 2}}>
                                {device.name}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: 1
                            }}>
                                <Rating
                                    name="half-rating-read"
                                    value={device.rating}
                                    precision={0.5}
                                    readOnly
                                />
                                <Typography variant="body1">
                                    {device.rating}
                                </Typography>
                            </Box>

                            <Typography variant="body1" align='center' sx={{mt: 2}}>
                                {device.price} руб.
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 'auto',
                            pb: 2
                        }}>
                            <Button variant="contained">В корзину</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="h5" sx={{mt: 3}}>
                        Характеристики:
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 2
                    }}>
                        {description.map((info, index) =>
                            <Box key={info.id}>
                                <Typography
                                    variant="body1"
                                    sx={{p: 1}}
                                    style={{background: index % 2 === 0 ? grey[300] : 'white'}}
                                >
                                    {info.title}: {info.value}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DevicePage;