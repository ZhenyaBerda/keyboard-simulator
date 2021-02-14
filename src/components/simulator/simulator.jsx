import React from 'react';
import Text from "./text";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import SimulatorInfo from "./simulatorInfo";

const Simulator = ({text}) => {
    text = 'dddddddddddd'
    const [inputUser, setInputUser] = React.useState('');
    const [totalSymbols, setTotalSymbols] = React.useState(0);
    const [errors, setErrors] = React. useState(0);


    const handleInput = (event) => {
        const value = event.target.value;
        let input;

        setTotalSymbols(totalSymbols + 1);

        if (inputUser.length === 0 ||
            inputUser[inputUser.length - 1] === text[inputUser.length - 1]) {
            input = value;
            setInputUser(input);
        } else {
            if (value.length === 2) {
                input = value.substring(1, 2);
                setInputUser(input)

            } else {
                input = value.substring(0, value.length - 2) + value.substring(value.length - 1);
                setInputUser(input);
            }
        }
        checkErrors(input, text.substring(0, input.length))
    }

    const checkErrors = (input, subText) => {
        if (input !== subText)
            setErrors(errors + 1);
    }

    return (
        <div>
            <Card.Body>
                <Card.Text>Введите текст в область ввода. Время начнется тогда, когда будет введен первый символ, и
                    закончится, когда будет введен последний правильный символ. Удачи!</Card.Text>
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
                    <Text text={text} inputUser={inputUser}/>
                </Card>
                <Card>
                    <SimulatorInfo
                        accuracy={totalSymbols ? (totalSymbols - errors) * 100 / totalSymbols : 0}
                       />
                </Card>
            </Card.Body>
        </div>
    );
}

export default Simulator;