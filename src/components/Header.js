import React from "react";
import logo from "../img/Logo.svg"


function Header() {
    return (
        <div>
            <section id="header">
                <div className="container">
                    <div className="header">
                        <img src={logo} alt=""/>
                        <div className="header--nav">
                            <a href="">Home</a>
                            <a href="">Features</a>
                            <a href="">Pricing</a>
                            <a href="">Blog</a>
                        </div>
                        <div className="header--btn">
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default (Header)