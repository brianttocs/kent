import React from 'react'
import {Banner} from '../../components/Banner'
import Product from '../Product';
import { ProductConsumer } from '../../components/context';

export default function Souvenirs() {
    return (
        <React.Fragment>
            <Banner parentName='Souvenirs' pageName='Souvenirs' linkName='Souvenirs' />
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
			</React.Fragment>
    )
}
