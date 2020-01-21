import React, { Component } from 'react'

export default class LCProducts extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="active-product-area section_gap">
					{/**single product slide */}
					<div className="single-product-slider">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-6 text-center">
									<div className="div-title">
										<h1>Latest Products</h1>
									</div>
								</div>
							</div>
							<div className="row">
								{/**single product */}
								<div className="card-deck">
									<div className="card">
										<img src="/images/womensBreeches.jpg" className="card-img-top" alt="Women's Breeches" />
										<div className="card-body">
											<h5 className="card-title text-center">Women's Breeches</h5>
										</div>
										<div className="card-footer">
											<button type="button" className="btn btn-light">Shop Now</button>
										</div>
									</div>
									<div className="card">
										<img src="/images/ridingFootwear.jpg" className="card-img-top" alt="Riding Footwear" />
										<div className="card-body">
											<h5 className="card-title text-center">Riding Footwear</h5>
										</div>
										<div className="card-footer">
											<button type="button" className="btn btn-light">Shop Now</button>
										</div>
									</div>
									<div className="card">
										<img src="images/ridingGloves.jpg" className="card-img-top" alt="Riding Gloves" />
										<div className="card-body">
											<h5 className="card-title text-center">Riding Gloves</h5>
										</div>
										<div className="card-footer">
											<button type="btn btn-outline-light btn-lg" className="btn btn-light">Shop Now
												</button>
										</div>
									</div>
								</div>
							</div>
							<div className="row my-5">
								<div className="card bg-dark text-white border border-light">
									<img src="/images/banner/oneHorseSnow.jpg" className="card-img" alt="..." style={{height:'25rem'}} />
										<div className="card-img-overlay align-content-center">
											<p className="display-4 display-flex text-white bg-secondary text-center" style={{opacity: '0.8'}}>Autumn / Winter Collection</p>
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
