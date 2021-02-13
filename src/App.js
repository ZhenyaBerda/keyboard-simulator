import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Simulator from "./components/simulator";

function App() {
    const text = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <h3>Тренажер</h3>
                </Row>
                <Row className="justify-content-md-center">
                    <Simulator text={text}/>
                </Row>
                <Row className="justify-content-md-center">
                    info
                </Row>
            </Container>
        </div>
    );
}

export default App;
