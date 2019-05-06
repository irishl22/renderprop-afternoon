import React from 'react'

const CurrencyDisplay = (props) => {
    <p>
        US Dollar Amount: ${props.amount.toFixed(2)}
        {props.currencyData.name}{props.currencyData.symbol}{props.amount.toFixed(2)*props.currencyData.rate}
    </p>
}

export default CurrencyDisplay