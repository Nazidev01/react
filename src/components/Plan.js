import React from "react";


function Plan() {
    return (
        <div>
            <section id="plan">
                <div className="container">
                    <div className="text">
                        <h1 className="h1">Get the right plan <br/>for future product.</h1>
                        <div className="text--title">
                            <button className="text--title__btn">Yearly</button>
                            <button className="text--title__btn1">Monthly</button>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan--block">
                            <p>Starter</p>
                            <h1>Free</h1>
                            <h3>1 Website
                                <br/>5 GB Hosting
                                <br/>Limited Support</h3>
                            <button>Get Started</button>
                        </div>
                        <div className="plan--block1">
                            <p>Starter</p>
                            <h1>$29/month</h1>
                            <h3>1 Website
                                <br/>5 GB Hosting
                                <br/>Limited Support</h3>
                            <button>Get Started</button>
                        </div>
                        <div className="plan--block">
                            <p>Starter</p>
                            <h1>$49/month</h1>
                            <h3>1 Website
                                <br/>5 GB Hosting
                                <br/>Limited Support</h3>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default (Plan)