import React from 'react'
import './Calculator.css';

function Calculator() {
    return (
        <div className="calculator">
            <div className="calc-text">
                <h3>CALCULATOR</h3>
                <h1>Bitcoin to <br /> Currency Calculator</h1>
                <span></span>
                <h4>Turn Bitcoin Into Dollars and Spend Anywhere</h4>
                <p>Millions of people have made a fortune with bitcoins!  <br />
                Check current exchange rates and make your profit from buying/selling bitcoins!</p>
                <button className="calc-btn">learn more</button>
            </div>

            <div className="bit-units">
                <img src="/img/amount.png" alt="bits" />
            </div>
        </div>
    )
}

export default Calculator
