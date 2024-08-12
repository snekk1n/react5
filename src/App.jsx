import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Components/Card';
import IngredientCock from './Components/IngredientCock';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Card />} />
                <Route path="/ingredient/:ingredient" element={<IngredientCock />} />
            </Routes>
        </Router>
    );
}

export default App;
