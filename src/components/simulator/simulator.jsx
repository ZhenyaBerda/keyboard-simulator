import React from 'react';
import Text from "./text";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import SimulatorInfo from "./simulatorInfo";

const Simulator = ({text}) => {
    const [inputUser, setInputUser] = React.useState('');
    const [totalSymbols, setTotalSymbols] = React.useState(0);
    const [errors, setErrors] = React. useState(0);
    const [seconds, setSeconds] = React.useState(0);
    const [isActiveTimer, setIsActiveTimer] = React.useState(false);
    const [isActiveInput, setIsActiveInput] = React.useState(false)

    React.useEffect(() => {
        if (totalSymbols === 1)
            setIsActiveTimer(true);

        if (inputUser === text) {
            setIsActiveTimer(false);
            setIsActiveInput(true)
        }
    }, [isActiveTimer, inputUser, totalSymbols, isActiveInput])

    React.useEffect(() => {
        let interval = null;
        if (isActiveTimer) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActiveTimer && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActiveTimer, seconds])


    const handleInput = (event) => {
        const value = event.target.value;
        let input;

        setTotalSymbols(totalSymbols + 1);

        if (inputUser.length === 0 ||
            inputUser[inputUser.length - 1] === text[inputUser.length - 1]) {
            input = value;
            setInputUser(input);
        } else {
            input = value.length === 2 ? value.substring(1, 2) : value.substring(0, value.length - 2) + value.substring(value.length - 1);
            setInputUser(input);
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
                        readOnly={isActiveInput}
                    />
                </InputGroup>
                <Card style={{marginBottom: '15px'}}>
                    <Text text={text} inputUser={inputUser}/>
                </Card>
                <Card>
                    <SimulatorInfo
                        spm={seconds ? totalSymbols / (seconds * 0.0166) : 0}
                        accuracy={totalSymbols ? (totalSymbols - errors) * 100 / totalSymbols : 0}
                       />
                </Card>
            </Card.Body>
        </div>
    );
}

export default Simulator;