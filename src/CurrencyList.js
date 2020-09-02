import React from 'react';
import Card from './Card';

const CurrencyList = ({	quotes }) => {

	return (
		<div>
			{
				quotes.map((currency, i) => {
					return (
						<Card
						key={i}
						eur={quotes[i].USDEUR}
						gbp={quotes[i].USDGBP}
						cad={quotes[i].USDCAD}
						pln={quotes[i].USDPLN}
						/>
					);
				})
			}
		</div>
	);
}

export default CurrencyList;