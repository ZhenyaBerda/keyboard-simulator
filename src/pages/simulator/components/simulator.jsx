import React from 'react';
import Text from "./text";
import SimulatorInfo from "./simulatorInfo";
import {InputGroup, FormControl, Card, Button, Row} from "react-bootstrap";

const Simulator = ({text, getText}) => {

    const initialState = {
        isActiveTimer: false,
        inputUser: '',
        isActiveInput: false,
        errors: 0,
        totalSymbols: 0,
    }

    const [state, setState] = React.useState({...initialState})
    const [seconds, setSeconds] = React.useState(0);

    const onReload = () => {
        getText();
        setState({...initialState});
        setSeconds(0);
    }

    React.useEffect(() => {
        if (state.totalSymbols === 1)
            setState({...state, isActiveTimer: true});

        if (state.inputUser === text)
            setState({...state, isActiveTimer: false, isActiveInput: true});

    }, [state.isActiveTimer, state.inputUser, state.totalSymbols, state.isActiveInput])

    React.useEffect(() => {
        let interval = null;
        if (state.isActiveTimer) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!state.isActiveTimer && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [state.isActiveTimer, seconds])



    const handleInput = (event) => {
        const value = event.target.value;
        let input;

        if (state.inputUser.length === 0 ||
            state.inputUser[state.inputUser.length - 1] === text[state.inputUser.length - 1]) {
            input = value;
        } else {
            input = value.length === 2 ? value.substring(1, 2) : value.substring(0, value.length - 2) + value.substring(value.length - 1);
        }


        const error = input !== text.substring(0, input.length);

        setState({...state, inputUser: input,totalSymbols: state.totalSymbols + 1,
            errors: error ? state.errors + 1 : state.errors,})

    }

    return (
        <div>
            <Card.Body>
                <Card.Text>Введите текст в область ввода. Время начнется тогда, когда будет введен первый символ, и
                    закончится, когда будет введен последний правильный символ. Удачи!</Card.Text>
                <Card.Text>P.S. После предложений по два пробела, будьте внимателнее.</Card.Text>
                <InputGroup className="mb-3">
                    <FormControl
                        as={'textarea'}
                        rows={4}
                        value={state.inputUser}
                        onChange={handleInput}
                        placeholder={'Начните вводить текст здесь'}
                        readOnly={state.isActiveInput}
                    />
                </InputGroup>
                <Card style={{marginBottom: '15px'}}>
                    <Text text={text} inputUser={state.inputUser}/>
                </Card>
                <Card>
                    <SimulatorInfo
                        seconds={seconds}
                        totalSymbols={state.totalSymbols}
                        errors={state.errors}
                       />
                </Card>
                <Card>
                    <Row className="justify-content-md-center align-items-center">
                        Хотите попробовать еще?
                        <Button
                            variant="link"
                            onClick={onReload}
                        >
                            Новый текст
                        </Button>
                    </Row>
                </Card>
            </Card.Body>
        </div>
    );
}

export default Simulator;