import React from 'react';
import {Row, Card, Button} from "react-bootstrap";
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

    return (
        <div>
            {!text ? <Card style={{width: '70vw', margin: '15px auto', textAlign: 'center'}}>
                    <Card.Body>
                        <Card.Title>
                            Добро пожаловать в тренажер слепой печати!
                        </Card.Title>
                        <Card.Text>
                            Клавиатурный тренажер — это специальная программа, «заточенная» на то, чтобы заставить наш мозг
                            запомнить расположение клавиш и научить работать с пальцами напрямую — без помощи зрения.
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => getText()}
                        >
                            Начать тренировку
                        </Button>
                    </Card.Body>
                </Card>
                :
                <Card style={{width: '70vw', margin: '15px auto'}}>
                    <Card.Body>
                        <Row className="justify-content-md-center">
                            <Simulator text={text}/>
                        </Row>
                        <Row className="justify-content-md-center align-items-center">
                            Хотите попробовать еще?
                            <Button
                                variant="link"
                                onClick={() => getText()}
                            >
                                Новый текст
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default SimulatorPage;