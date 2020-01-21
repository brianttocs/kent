import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="category-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="/images/2guys horse.jpg" alt="" />
                                            <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Men's Riding Wear</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="/images/horseback.jpg" alt="" />
                                            <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Saddle Accessories</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="/images/girlnhorse2.jpg" alt="" />
                                            <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Riding Gilets</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="/images/twoGirlsHorse.jpg" alt="" />
                                            <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Sweat, Fleece, Jackets & Hoodies</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100" src="/images/4girls.jpg" alt="" />
                                    <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Children's Riding Wear'</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
