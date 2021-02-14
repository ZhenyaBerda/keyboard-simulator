import React from 'react';
import {Container, Row, Card, Button} from "react-bootstrap";
import Simulator from "./simulator";

const SimulatorPage = () => {
    const [text, setText] = React.useState('');

    const getText = async () => {
        const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=1`;
        await fetch(url)
            .then(response => response.json())
            .then(data => setText(data.join()))
            .catch(() => alert('Ошибка получения данных'))
    }

    console.log(text)

        return (
        <div>
            {!text ? <Card style={{ width: '70vw', margin: '15px auto', textAlign: 'center' }}>
                <Card.Body>
                    <Card.Title>
                        Добро пожаловать в тренажер слепой печати!
                    </Card.Title>
                    <Card.Text>
                        Клавиатурный тренажер — это специальная программа, «заточенная» на то, чтобы заставить наш мозг запомнить расположение клавиш и научить работать с пальцами напрямую — без помощи зрения.
                    </Card.Text>
                    <Button onClick={() => getText()} variant="primary">Начать тренировку</Button>
                </Card.Body>
            </Card>
                :
            <Container>
                    <Row className="justify-content-md-center">
                        <Simulator text={text}/>
                    </Row>
                </Container>
            }
        </div>
    );
}

export default SimulatorPage;