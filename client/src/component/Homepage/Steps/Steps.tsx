import React from 'react';
import './Steps.css';

function Steps() {
    return (
        <div className="steps">
             <h1>BUY AND SELL BITCOIN</h1>
             <h3>Simple Steps to Get Started</h3>
             <span></span>
             <div className="simple-steps">
                 <div className="step-guide">
                     <img src="/img/download.png" alt="download" />
                     <h2>Download a Wallet</h2>
                     <p>
                     Download an app or program Bitcoin Wallet which allows you to send and receive bitcoins.
                      There are many wallets across various platforms. While their features vary, their functionality remains.
                     </p>
                 </div>
                 <div className="step-guide">
                     <img src="/img/add.png" alt="add" />
                     <h2>Add Bitcoin to a Wallet</h2>
                     <p>
                     Once your wallet is downloaded and activated you can add some bitcoins via credit card or with a Bitcoin Exchange.
                      Keep your private key secure and never lose the device on which the wallet was installed.
                     </p>
                 </div>
                 <div className="step-guide">
                     <img src="/img/send.png" alt="send" />
                     <h2>Send/Receive with Wallet</h2>
                     <p>
                     The process of sending bitcoins is very easy. In two words, you need to send receiver's public Bitcoin address in your wallet,
                      specify the amount, confirm address and send.
                     </p>
                 </div>
             </div>
        </div>
    )
}

export default Steps
