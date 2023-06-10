import React from "react";
import img2 from "../img/img2.png"


function Index() {
    return (
        <div>
            <section id="index">
                <div className="container">
                    <div className="index">
                        <img src={img2} alt=""/>
                        <div className="index--text">
                            <h1>Subscription index</h1>
                            <p>A daily dataset to keep you up to date on <br/>subscription market trends and what's
                                happening in <br/>your vertical.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default (Index)