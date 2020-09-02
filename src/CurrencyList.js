import React from 'react';
import Card from './Card';

const CurrencyList = ({	results }) => {
	
	return (
		// <div>
		// 	{
		// 		results.map((result, i) => {
		// 			return (
		// 				<Card
		// 				key={i}
		// 				source = {result[i].source}
		// 				eur={result[i].quotes.USDEUR}
		// 				gbp={result[i].quotes.USDGBP}
		// 				cad={result[i].quotes.USDCAD}
		// 				pln={result[i].quotes.USDPLN}
		// 				/>
		// 			);
		// 		})
		// 	}
		// </div>
		<h1>Card</h1>
	);
}

export default CurrencyList;