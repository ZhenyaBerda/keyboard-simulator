import React from 'react';
import Text from "./text";
import { InputGroup, FormControl, Card } from "react-bootstrap";

const Simulator = ({text}) => {
    const textArr = text.split('');
    const [inputUser, setInputUser] = React.useState('');

    const handleInput = (event) => {
        setInputUser(event.target.value);
    }

    return (
        <div >
            <InputGroup className="mb-3">
                <FormControl
                    as={'textarea'}
                    value={inputUser}
                    onChange={handleInput}
                    placeholder={'Начните вводить текст здесь'}
                />
            </InputGroup>
            <Card>
                <Text text={textArr} inputUser={inputUser}/>
            </Card>
        </div>
    );
}

export default Simulator;