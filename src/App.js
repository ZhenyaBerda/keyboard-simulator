import React from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import {InfoPage, SimulatorPage} from "./pages";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer to={'/simulator'}>
                            <Nav.Link>Тренажер</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/info'}>
                            <Nav.Link>Информация</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/simulator">
                    <SimulatorPage />
                </Route>
                <Route path="/info">
                    <InfoPage />
                </Route>
                <Redirect from='/' to='/simulator'/>
            </Switch>
        </div>
    );
}

export default App;
