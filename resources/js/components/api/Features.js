import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="features-area section_gap">
                    <div className="container">
                        <div className="row features-inner">
                            {/**single features */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src={require("../../../styles/img/features/f-icon1.png")} alt="" />
                                    </div>
                                    <h6>Free Delivery</h6>
                                    <p>Free delivery for selected orders</p>
                                </div>
                            </div>
                            {/**single features */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src={require("../../../styles/img/features/f-icon2.png")} alt="" />
                                    </div>
                                    <h6>Return Policy</h6>
                                    <p>Money back guarantee</p>
                                </div>
                            </div>
                            {/**single features */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src={require("../../../styles/img/features/f-icon3.png")} alt="" />
                                    </div>
                                    <h6>24/7 Support</h6>
                                    <p>For all customer inquires</p>
                                </div>
                            </div>
                            {/**single features */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src={require("../../../styles/img/features/f-icon4.png")} alt="" />
                                    </div>
                                    <h6>Secure Payment</h6>
                                    <p>Strengthen with PayPal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
