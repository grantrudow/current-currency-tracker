import React from 'react';
import './App.css';
import Card from './Card';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const endpoint = 'live';
    const access_key = '69d695f9dca70a1baae66074dfabb776';
    const currencies = 'EUR,GBP,CAD,PLN';
    const source = 'USD';
    const format = '1';

     fetch('http://api.currencylayer.com/' + endpoint 
        + '?access_key=' + access_key 
        + '&currencies' + currencies
        + '&source' + source
        + '&format' + format
        )
     .then(response => response.json())
     .then(data => this.setState({ data }));  
     console.log(this.state.data)
     
  }

  render() {

    const { error, success  } = this.state;
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!success) {
      return <div>Loading...</div>
    } else {
      return (
        <Card />
      )
    }

  }
}

export default App;
