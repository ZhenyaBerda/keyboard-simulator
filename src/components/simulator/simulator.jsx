import React from 'react';
import Text from "./text";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import SimulatorInfo from "./simulatorInfo";

const Simulator = ({text}) => {
    const textArr = text.split('');
    const [inputUser, setInputUser] = React.useState('');

    const handleInput = (event) => {
        const length = inputUser.length - 1;
        const value = event.target.value;

         if (inputUser.length === 0 ||
             inputUser[length] === textArr[length]) {
             setInputUser(value);
         }
         else {
             if (value.length === 2) {
                  setInputUser(value.substring(1, 2))
             } else {
                 setInputUser(value.substring(0, value.length - 2) + value.substring(value.length - 1))
             }
         }
    }

    return (
        <div>
            <Card.Body>
                <Card.Text>Введите текст в область ввода. Время начнется тогда, когда будет введен первый символ, и закончится, когда будет введен последний правильный символ. Удачи!</Card.Text>
            <InputGroup className="mb-3">
                <FormControl
                    as={'textarea'}
                    rows={4}
                    value={inputUser}
                    onChange={handleInput}
                    placeholder={'Начните вводить текст здесь'}
                />
            </InputGroup>
            <Card style={{marginBottom: '15px'}}>
                <Text text={textArr} inputUser={inputUser}/>
            </Card>
            <Card>
                <SimulatorInfo/>
            </Card>
            </Card.Body>
        </div>
    );
}

export default Simulator;