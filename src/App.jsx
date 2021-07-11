import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {Step1} from "./Components/Step1";
import {Step2} from "./Components/Step2";
import {Header} from "./Components/Header";
import {Step3} from "./Components/Step3";
import {Result} from "./Components/Result";


export const RoutePath = {
    home: '/',
    step2: '/step2',
    step3: '/step3',
    result: '/result',
}


export const App = () => {
    return (
        <>
            <Header/>
              <Switch>
                <Route exact path={RoutePath.home}><Step1/></Route>
                <Route path={RoutePath.step2}><Step2/></Route>
                <Route path={RoutePath.step3}><Step3/></Route>
                <Route path={RoutePath.result}><Result/></Route>
              </Switch>
        </>
    );
}


