import React, {useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton'
import {Box, Card, Container, FormControl, TextField, Typography} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const  isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        if (isLogin) {
            const response = await login(email, password);
        } else {
            const response = await registration(email, password);
            console.log(response);
        }
    };

    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
        setLoading(true);
        click();
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: window.innerHeight - 100
        }}>
            <Card sx={{p: 5, width: 400}}>
                <Typography variant="h4" align={"center"}>{isLogin ? "Авторизация" :  "Регистрация"}</Typography>
                <FormControl sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <TextField
                        required
                        label="Email"
                        type="email"
                        size="small"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        sx={{mt: 3}}
                    />
                    <TextField
                        required
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        size="small"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{mt: 2}}
                    />
                    <Box sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            {isLogin ? <NavLink to={REGISTRATION_ROUTE} style={{
                                    color: "#1976d2"
                                }}>
                                    <Typography>Регистрация</Typography>
                                </NavLink>
                                :
                                <NavLink to={LOGIN_ROUTE} style={{
                                    color: "#1976d2"
                                }}>
                                    <Typography>Вход</Typography>
                                </NavLink>
                            }
                        </div>
                        <div>
                            <LoadingButton
                                onClick={handleClick}
                                loading={loading}
                                variant="outlined"
                            >
                                {isLogin ? "Войти" :  "Зарегистрироваться"}
                            </LoadingButton>
                        </div>
                    </Box>
                </FormControl>
            </Card>
        </Container>
    );
};

export default Auth;