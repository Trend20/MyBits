import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="services">
            <div className="service">
                <div className="first-column">
                   <div className="desc-text">
                       <h3>Safe and Secure</h3>
                       <p>Be sure in your account security and your funds safe.</p>
                    </div> 
                    <div className="desc-image">
                        <img src="/img/secure.png" alt="secure" />
                    </div>
                </div>
                <div className="first-column">
                   <div className="desc-text">
                       <h3>Mobile Apps</h3>
                       <p>Perfectly developed mobile apps will open you new opportunities.</p>
                    </div> 
                    <div className="desc-image">
                        <img src="/img/mobile.png" alt="secure" />
                    </div>
                </div>
                <div className="first-column">
                   <div className="desc-text">
                       <h3>Wallet</h3>
                       <p>Easy-to-use personal wallet will keep your bitcoins in safe.</p>
                    </div> 
                    <div className="desc-image">
                        <img src="/img/wallet.png" alt="wallet" />
                    </div>
                </div>
            </div>
            <div className="bits">
                <img src="/img/bits.png" alt="bits" />
            </div>
            <div className="service">
                <div className="second-column">
                <div className="desc-image">
                        <img src="/img/experts.png" alt="experts" />
                    </div>
                   <div className="desc-text">
                       <h3>Experts Support</h3>
                       <p>Highly professional support will answer all your questions regarding bitcoins.</p>
                    </div> 
                </div>
                <div className="second-column">
                    <div className="desc-image">
                        <img src="/img/exchange.png" alt="exchange" />
                    </div>
                   <div className="desc-text">
                       <h3>Instant Exchange</h3>
                       <p>Instant Exchange allows you to send bitcoin and pay for it with your . . .</p>
                    </div> 
                </div>
                <div className="second-column">
                    <div className="desc-image">
                        <img src="/img/recuring.png" alt="recuring" />
                    </div>
                   <div className="desc-text">
                       <h3>Recuring Buys</h3>
                       <p>The recurring transaction feature allows you to schedule future . . .</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Services
