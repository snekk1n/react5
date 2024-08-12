import React, { useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

function Card() {
    const [data, setData] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState('');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handleButtonClick = (letter) => {
        setSelectedLetter(letter);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(response => {
                setData(response.data.drinks || []);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="mb-3">
                {alphabet.map(letter => (
                    <button
                        key={letter}
                        onClick={() => handleButtonClick(letter)}
                        className="btn btn-primary m-1"
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="row">
                {data.map(item => (
                    <div className="col-4" key={item.idDrink}>
                        <CardItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
