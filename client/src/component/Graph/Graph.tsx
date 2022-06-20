import React from 'react'
import './Graph.css';

function Graph() {
    return (
        <div className="graph">
            <div className="graph-description">
                 <h1>BUY BITCOINS</h1>
                 <h3>
                    Buy and Sell Bitcoin
                 </h3>
                 <span></span>
                 <h5>There are two ways to buy bitcoins: with a credit card or on an exchange.</h5>
                 <p>
                     Bitcoin was partnered with Simplex to make buying with it card easier. At bitcoin exchange users can buy and sell bitcoins after setting up an account. Making a decision depends on how quickly you want to complete the transaction. There are different fees and terms.
                 </p>
                 <button className="graph-btn">signup now</button>
            </div>

            <div className="image">
                <img src="img/graph.png" alt="bitimage" />
            </div>
        </div>
    )
}

export default Graph
