import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter'
import Currency from './Components/CurrencyDisplay'

class App extends Component {
  render() {
    return (
      <div>
        <>
          <h2>Render Props</h2>
          <Currency render={(currencyData, amount) => {
            return (
              <p key={currencyData.id}>
                US Dollar Amount: ${amount.toFixed(2)}
                {currencyData.name}{currencyData.symbol}{amount.toFixed(2)*currencyData.rate}
              </p>
            )}}/>
        </>
      </div>
    );
  }
}

export default App;
