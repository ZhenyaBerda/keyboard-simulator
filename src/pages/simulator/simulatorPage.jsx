import React from 'react';
import {Card, Button} from "react-bootstrap";
import Simulator from "./components/simulator";

//Страница тренажера
const SimulatorPage = () => {
    const [text, setText] = React.useState('');

    //Получение текста
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
                        <Simulator text={text} getText={getText}/>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default SimulatorPage;