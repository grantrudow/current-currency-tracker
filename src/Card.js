import React from 'react';
import './Card.css';

const Card = ({ source, eur, gbp, cad, pln }) => {
    console.log(`${source}`)
    return (
        <div className="card">
            <h1>{source}</h1>
            <h2>{ gbp }</h2>
            <h2>{ eur }</h2>
        </div>
    );
}

export default Card;