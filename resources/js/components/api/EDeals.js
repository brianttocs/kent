import React, { Component } from 'react'

export default class EDeals extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="exclusive-deal-area mx-5 px-5 py-5">
					<div className="container-fluid">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-6 no-padding exclusive-left">
								<div className="row clock_sec clockdiv" id="clockdiv">
									<div className="col-lg-12">
										<h1>Exclusive Hot Deal Ends Soon!</h1>
										<p>Who are in extremely love with eco friendly system.</p>
									</div>
								</div>
								<a href="/" className="primary-btn">Shop Now</a>
							</div>
							<div className="col-lg-6 no-padding exclusive-right">
								<div className="active-exclusive-product-slider">
									{/**single exclusive carousel */}
									<div className="single-exclusive-slider">
										<img className="img-fluid" src="/images/girlNHorse.jpg" alt="" />
										<div className="product-details">
											<div className="price">
												<h6>€ 150.00</h6>
												<h6 className="l-through">€ 210.00</h6>
											</div>
											<h4>KENTAURS New Hammer sole
									for Sports person</h4>
											<div className="add-bag d-flex align-items-center justify-content-center">
												<a className="add-btn" href="/"><span className="ti-bag"></span></a>
												<span className="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>

									<div className="single-exclusive-slider">
										<img className="img-fluid" src="/images/girlHelmet.jpg" alt="" />
										<div className="product-details">
											<div className="price">
												<h6>€ 150.00</h6>
												<h6 className="l-through">€ 210.00</h6>
											</div>
											<h4>KENTAURS New Hammer sole
									for Sports person</h4>
											<div className="add-bag d-flex align-items-center justify-content-center">
												<a className="add-btn" href="/"><span className="ti-bag"></span></a>
												<span className="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </React.Fragment>
        )
    }
}
