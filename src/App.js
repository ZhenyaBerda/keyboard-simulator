import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Simulator from "./components/simulator";
import {getText} from './api/getText'

function App() {
    const [isStart, setIsStart] = React.useState(false);
   const [text, setText] = React.useState('');

    const onStart = async () => {
        const response = await getText();
        const textResponse = await response.json();
        setText(textResponse.join(''))
    }

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
            <button onClick={onStart}>f</button>
            {isStart && <Container>
                <Row className="justify-content-md-center">
                    <h3>Тренажер</h3>
                </Row>
                <Row className="justify-content-md-center">
                    <Simulator text={text}/>
                </Row>
            </Container>}
        </div>
    );
}

export default App;
