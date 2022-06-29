import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, List, ListItemButton, ListItemText} from "@mui/material";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Card>
            <List component="nav">
                {device.types.map(type =>
                    <ListItemButton
                        key={type.id}
                        selected={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        <ListItemText primary={type.name} />
                    </ListItemButton>
                )}
            </List>
        </Card>
    );
});

export default TypeBar;