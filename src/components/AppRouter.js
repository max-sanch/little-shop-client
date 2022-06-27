import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
                user.isAuth ?
                <Route key={path} path={path} element={<Component/>} exact />
                :
                <Route key={path} path={path} element={<Unauthorized/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
};

export default AppRouter;