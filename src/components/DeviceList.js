import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Grid} from "@mui/material";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Grid container spacing={2}>
            {device.devices.map(oneDevice =>
                <Grid item md={3} key={oneDevice.id}>
                    <DeviceItem device={oneDevice}/>
                </Grid>
            )}
        </Grid>
    );
});

export default DeviceList;