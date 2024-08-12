import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardItem({ item }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsFlipped(prev => !prev);
    };

    const handleIngredientClick = (ingredient) => {
        navigate(`/ingredient/${ingredient}`);
    };

    const ingredientImages = [];
    for (let i = 1; i <= 5; i++) {
        const ingredient = item[`strIngredient${i}`];
        if (ingredient) {
            const imageUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`;
            ingredientImages.push({ imageUrl, ingredient });
        }
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="front">
                    <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} />
                    <div className="card-img-overlay">
                        <h3 className="card-title text-white">{item.strDrink}</h3>
                    </div>
                </div>
                <div className="back">
                    <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} />
                    <div className="card-img-overlay">
                        <h3 className="card-title">{item.strDrink}</h3>
                            {ingredientImages.map((ingredientObj, index) => (
                                <p
                                    key={index}
                                    className="card-text"
                                    onClick={() => handleIngredientClick(ingredientObj.ingredient)}
                                >
                                    <img
                                        src={ingredientObj.imageUrl}
                                        className="icon"
                                        alt={ingredientObj.ingredient}
                                    />
                                    {ingredientObj.ingredient}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
