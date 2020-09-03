import React from 'react';
import './Card.css';
import CurrencyForm from './CurrencyForm'

const Card = ({ source, eur, gbp, cad, pln }) => {
    return [
        <div className="card">
            <h1>US Dollar to Euro</h1>
            <h2>{ gbp }</h2>
        </div>,
        <div className="card">
            <h1>US Dollar to British Pound</h1>
            <h2>{ gbp }</h2>
        </div>,
        <div className="card">
            <h1>US Dollar to Canadian Dollar</h1>
            <h2>{ cad }</h2>
        </div>,
        <div className="card">
            <h1>US Dollar to Polish zloty</h1>
            <h2>{ pln }</h2>
        </div>
    ];
}

export default Card;