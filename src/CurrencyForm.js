import React from 'react';

class CurrencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'EUR'
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        console.log('You selected: ' + this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="EUR">Euro</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="PLN">Polish zloty</option>
                    <option value="GBP">Pound</option>
                </select>
            </form>
        );
    }
}

export default CurrencyForm;