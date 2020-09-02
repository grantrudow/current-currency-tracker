import React from 'react';
import './Card.css';

const Card = ({ eur, gbp, cad, pln }) => {
    // console.log(`${eur}`)
    return (
        <div className="card">
            <h1>USD</h1>
            <h2>{ gbp }</h2>
            <h2>{ eur }</h2>
        </div>
    );
}

export default Card;