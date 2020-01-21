import React, { Component } from 'react'
import Product from './Product';
import { ProductConsumer } from '../subs/Context';
import Slider from '../subs/Slider';
import Features from '../subs/Features';
import Category from '../subs/Category';
import LCProducts from '../subs/LCProducts';
import EDeals from '../subs/EDeals';
import Brands from '../subs/Brands';
import DofWeek from '../subs/DofWeek';
import Footer from '../subs/Footer';


export default class ProductList extends Component {
	// state = {
	//   product: storeProducts
	// }
	render() {
		return (
			<React.Fragment>
				<Slider/>
				<Features />
				<Category />
				<LCProducts />
				<EDeals />
				<Brands />
				<DofWeek />

				{/**Start related-product Area */}

				<section className="category-area">
					<div className='my-0'>
						<div className='container'>
							<div className="row justify-content-center">
								<div className="col-lg-6 text-center">
									<div className="section-title">
										<h1>Top Sellers</h1>
									</div>
								</div>
							</div>
							<div className='row'>
								<ProductConsumer>
									{(value) => {
										return (
											value.products.map(_product => {
												return (
													<Product
														key={_product.id}
														product={_product}
													/>
												)
											})
										)
									}}
								</ProductConsumer>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		)
	}
}