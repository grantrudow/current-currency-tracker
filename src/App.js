import React from 'react';
import './App.css';
import Card from './Card';
import CurrencyList from './CurrencyList';
import Home from './Home';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        source: '',
        currentRates: [],
        success: false
      }
  }

  componentDidMount() {
    const endpoint = 'live';
    const access_key = '69d695f9dca70a1baae66074dfabb776';
    const format = '1';
    const source = 'USD';
    const currencies = 'EUR,GBP,CAD,PLN'
    const parent = this;

     fetch('http://api.currencylayer.com/' + endpoint 
        + '?access_key=' + access_key 
        + '&currencies' + currencies
        + '&source' + source
        + '&format' + format
        )
     .then(response => response.json())
    //  .then(data => console.log(data.quotes))
     .then(data => parent.setState({ 
        currentRates: [data],
        success: true,
      }));
  }

  render() {
    
    const { currentRates, error, success  } = this.state;

    if (this.state.success) {
      return (
        <div className="body-container">
          <Home />
          <div className="rates-container">
            <CurrencyList currentRates = { this.state.currentRates } />
          </div>
        </div>
      );
    }
    return (
      <h1>Nothing Loaded</h1>
    )
  }
}

export default App;
