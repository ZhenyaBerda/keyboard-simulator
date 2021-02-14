import React from 'react';
import { Row, Col, Jumbotron } from "react-bootstrap";


const SimulatorInfo = ({spm, accuracy}) => {

    return (
        <div style={{ margin: '15px', textAlign: 'center' }}>
            <Row>
                <Col>
                    <Jumbotron style={{ padding: '10px 0', margin: 0}}>
                        <h6>Скорость</h6>
                        <p>{Math.trunc(spm)} зн/мин</p>
                    </Jumbotron>
                </Col>
                <Col>
                    <Jumbotron style={{ padding: '10px 0', margin: 0}}>
                        <h6>Точность</h6>
                        <p>{accuracy.toFixed(1)}%</p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
}

export default SimulatorInfo;