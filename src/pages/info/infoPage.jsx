import React from 'react';
import {Card} from "react-bootstrap";

const InfoPage = () => {
    return (
        <Card style={{width: '70vw', margin: '15px auto'}}>

            <Card.Header as="h5">Информация о тренажере</Card.Header>
            <Card.Body>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Описание
                        </Card.Title>
                        <Card.Text>
                            Клавиатурный тренажер — это специальная программа, «заточенная» на то, чтобы заставить наш мозг запомнить расположение клавиш и научить работать с пальцами напрямую — без помощи зрения.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginTop: '20px'}}>
                    <Card.Body>
                        <Card.Title>
                            Используемые технологии
                        </Card.Title>
                        <Card.Text>
                            <ul>
                                <li>React: Версия 17.0.1</li>
                                <li>Bootstrap: Версия 4.6.0</li>
                                <li>react router dom: Версия 5.2.0 </li>
                                <li>Для state management приложения использовались React Hooks</li>
                                <li>Для получения текстов использовался Bacon Ipsum JSON API</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginTop: '20px'}}>
                    <Card.Body>
                        <Card.Text>
                            Выполнила: Бердникова Евгения
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
}

export default InfoPage;