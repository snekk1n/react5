import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IngredientCock() {
    const { ingredient } = useParams();
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => {
                console.log(response);
                setDrinks(response.data.drinks);
            })
            .catch(error => {
                console.log(error);
            });
    }, [ingredient]);

    return (
        <div className="row">
            {drinks.map(drink => (
                <div className="col-4" key={drink.idDrink}>
                    <div className="card">
                        <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink} />
                        <div className="card-body">
                            <h5 className="card-title">{drink.strDrink}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default IngredientCock;
