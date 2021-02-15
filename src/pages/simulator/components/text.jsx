import React from 'react';

//Компонент для вывода текста и отображение корректности вводимого текста
const Text = ({text, inputUser}) => {
    return (
        <div style={{margin: '15px'}}>
            {text.split('').map((symbol, index) => {
                let color;
                if (index < inputUser.length) {
                    color = symbol === inputUser[index] ? '#99ff99' : '#ff6161';
                }

                return <span
                    key={index}
                    style={{backgroundColor: color}}>
                    {symbol}
                </span>
            })
            }
        </div>
    );
}

export default Text;