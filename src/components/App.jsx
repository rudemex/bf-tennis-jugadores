import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Wrapper from "./Wrapper/Wrapper";

import Home from "../containers/Home/Home";
import Jugador from "../containers/Jugador/Jugador";
import Detalle from "../containers/Jugador/Detalle";
import NotFound from "../containers/NotFound/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/jugador"} component={Jugador}/>
                        <Route exact path={"/jugador/:id"} component={Detalle}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        </>
    )
}

export default App;
