import React from 'react'
import './Currency.css';

function Currency() {
    return (
        <div className="bit-currency" id='currency'>
            <div className="image">
                <img src="img/bitcoin.png" alt="bitimage" />
            </div>
            <div className="currency-description">
                 <h1>WHAT IS BITCOIN</h1>
                 <h3>
                     New Currency - New Lifestyle!
                 </h3>
                 <span></span>
                 <p>
                     Bitcoin is a revolutionary invention of the last decade. Its essential meaning is money digitization. It became the first decentralized peer-to-peer payment network for using without any central authority or middlemen. In a nutshell, bitcoin is the money for Internet. Its original purpose is providing all people with universal currency for different operations. Bitcoin can also be described as the most prominent triple entry bookkeeping system in existence.
                 </p>
                 <button className="currency-btn">Read more</button>
            </div>
        </div>
    )
}

export default Currency
