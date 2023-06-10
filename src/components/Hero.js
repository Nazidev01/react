import React from "react";
import img from "../img/img1.png"
import logo1 from "../img/logo1.svg"
import logo2 from "../img/logo2.svg"
import logo3 from "../img/logo3.svg"
import logo4 from "../img/logo4.svg"
import logo5 from "../img/logo5.svg"




function Hero(){
    return(
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--text">
                        <h1>Grow your
                            subscription
                            business</h1>
                        <p>Outcome-centered products that reduce churn, <br/>optimize pricing, and grow your subscription <br/>business end-to-end.</p>
                        <div className="hero--text__btn">
                            <button>Get Started</button>
                            <svg className="hero--text__btn--line" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.75V23.25" stroke="#19191B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.5 12.75L12 23.25L22.5 12.75" stroke="#19191B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                    </div>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className="logo">
                    <img className="logos" src={logo1} alt=""/>
                    <img className="logos" src={logo2} alt=""/>
                    <img className="logos" src={logo3} alt=""/>
                    <img className="logos" src={logo4} alt=""/>
                    <img className="logos" src={logo5} alt=""/>
                </div>
            </div>
        </section>


    )
}
export default (Hero)