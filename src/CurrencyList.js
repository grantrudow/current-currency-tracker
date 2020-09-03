import React from 'react';
import Card from './Card';

const CurrencyList = ({	currentRates }) => {
	
	return (
		<div>
			{
				currentRates.map((rate, i) => {
					return (
						<Card
						key={i}
						source = {currentRates[i].source}
						eur={currentRates[i].quotes.USDEUR}
						gbp={currentRates[i].quotes.USDGBP}
						cad={currentRates[i].quotes.USDCAD}
						pln={currentRates[i].quotes.USDPLN}
						/>
					);
				})
			}
		</div>
	);
}

export default CurrencyList;