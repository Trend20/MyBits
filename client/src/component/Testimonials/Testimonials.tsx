import React from 'react'
import './Testimonials.css';


function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials-img">
                <img src="/img/testimonials.jpg" alt="testimonials" />
            </div>

            <div className="testimonials-text">
                <div className="desc-text">
                    <h3>TESTIMONIALS</h3>
                    <h1>Feedback from Our Investors</h1>
                    <span></span>
                </div>
                {/* <div className="slider">

                </div> */}
            </div>
        </div>
    )
}

export default Testimonials
