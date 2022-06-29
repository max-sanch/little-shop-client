import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useLinkClickHandler} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const clickToDevice = useLinkClickHandler(DEVICE_ROUTE + '/' + device.id);

    return (
        <Card>
            <CardActionArea
                onClick={clickToDevice}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={device.img}
                />
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box color="text.secondary">Смартфон..</Box>
                        <Box color="text.secondary" sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            {device.rating} <StarBorderIcon fontSize={"small"}/>
                        </Box>
                    </Box>
                    <Typography gutterBottom variant="body1" component="div">
                        {device.name}
                    </Typography>
                </CardContent>
            </CardActionArea
               >
        </Card>
    );
};

export default DeviceItem;