import React from "react";
import img3 from "../img/img3.png";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";



function Metric() {
    return (
        <div>
            <section id="metric">
                <div className="container">
                    <div className="metric">
                        <div className="metric--text">
                            <h1>In-depth metrics</h1>
                            <p>Accurate, real-time reporting at your fingertips. <br/>Getting data has never been
                                easier.</p>
                            <a href="">Learn more</a>
                        </div>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="metric2">
                        <div className="metric2--block">
                            <img src={card1} alt=""/>
                            <h2>Benchmarks</h2>
                            <p>See how you stack up against comparable <br/>companies in similar stages.</p>
                        </div>
                        <div className="metric2--block">
                            <img src={card2} alt=""/>
                            <h2>Benchmarks</h2>
                            <p>See how you stack up against comparable <br/>companies in similar stages.</p>
                        </div>
                        <div className="metric2--block">
                            <img src={card3} alt=""/>
                            <h2>Benchmarks</h2>
                            <p>See how you stack up against comparable <br/>companies in similar stages.</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default (Metric)