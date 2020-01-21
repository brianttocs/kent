import React, { Component } from "react";
import { ProductConsumer } from "../components/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/Button";

export default class Details extends Component {
	render() {
		return (
			<div>
				<ProductConsumer>
					{value => {
						const {
							id,
							title,
							img,
							price,
							company,
							info,
							inCart
						} = value.detailProduct;
						return (
							<div className="container py-5">
								{/**TITLE */}
								<div className="row">
									<div className="col-10 mx-auto text-center text-slanted text-blue my-2">
										<h1>{title}</h1>
									</div>
								</div>

								{/**PRODUCT */}
								<div className="row">
									{/**IMAGE */}
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<img src={img} style={{width:'30rem', height:'30rem'}}className="img-flu" alt="product" />
									</div>
									{/**TEXT */}
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<h2>Model: {title}</h2>
										<h4 className="tex-title text-uppercase text-muted mt-3  mb-2">
											Made by :{" "}
											<span className="text-uppercase">{company}</span>
										</h4>
										<h4 className="text-blue">
											<strong>
												Price : <span>€ </span>
												{price}
											</strong>
										</h4>
										<p className="text-autoCapitalize font-weight-bold mt-3 mb-0">
											Details :
                    					</p>
										<p className="text-muted lead">{info}</p>
										{/**BUTTONS */}
										<div>
											<Link to="/">
												<ButtonContainer>Back To Products</ButtonContainer>
											</Link>
											<ButtonContainer
												cart
												disabled={inCart ? true : false}
												onClick={() => {
													value.addToCart(id);
													value.openModel(id)
												}}
											>
												{inCart ? "In Cart" : "Add to Cart  "}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</ProductConsumer>
			</div>
		);
	}
}
