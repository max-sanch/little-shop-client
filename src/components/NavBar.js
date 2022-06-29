import React from 'react';

import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from "@mui/icons-material/Adb";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Box, Button, Container} from "@mui/material";
import {NavLink, useLinkClickHandler} from "react-router-dom";

import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";


const NavBar = () => {
    const {user} = React.useContext(Context);
    const clickToBasket = useLinkClickHandler(BASKET_ROUTE);
    const clickToAdmin = useLinkClickHandler(ADMIN_ROUTE);
    const clickToLogin = useLinkClickHandler(LOGIN_ROUTE);
    const clickToShop = useLinkClickHandler(SHOP_ROUTE);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    const logOut = (event) => {
        user.setIsAuth(false);
        setAnchorElUser(null);
        clickToShop(event);
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <NavLink to={SHOP_ROUTE} style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </NavLink>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="span"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to={SHOP_ROUTE} style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            LOGO
                        </NavLink>
                    </Typography>

                    {user.isAuth ?
                        <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                            <IconButton
                                size="large"
                                onClick={clickToBasket}
                                color="inherit"
                            >
                                <ShoppingCartIcon/>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="user-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUser}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="user-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUser}
                            >
                                <MenuItem onClick={logOut}>Выйти</MenuItem>
                                {user.user.isAdmin && (
                                    <MenuItem onClick={clickToAdmin}>Админ панель</MenuItem>
                                )}
                            </Menu>
                        </Box>
                        :
                        <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={clickToLogin}
                            >
                                Войти
                            </Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;