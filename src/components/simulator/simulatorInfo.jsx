import React from 'react';
import {Row, Col, Jumbotron} from "react-bootstrap";


const SimulatorInfo = ({seconds, totalSymbols, errors}) => {
    return (
        <div style={{ margin: '15px', textAlign: 'center' }}>
            <Row>
                <Col>
                    <Jumbotron style={{ padding: '10px 0', margin: 0}}>
                        <h6>Скорость</h6>
                        <p>{seconds ? Math.trunc(totalSymbols / (seconds * (1/60))) : 0} зн/мин</p>
                    </Jumbotron>
                </Col>
                <Col>
                    <Jumbotron style={{ padding: '10px 0', margin: 0}}>
                        <h6>Точность</h6>
                        <p>{(totalSymbols ? (totalSymbols - errors) * 100 / totalSymbols : 0).toFixed(1)}%</p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
}

export default SimulatorInfo;