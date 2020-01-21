import React, { Component } from 'react'
import { storeGrooming, detailGrooming } from '../../database/_Grooming';
import { storeHorse, detailHorse } from '../../database/_Horse';
import { storeRider, detailRider } from '../../database/_Rider';
import { storeSouvenir, detailSouvenir } from '../../database/_Souvenir';

export const ProductContext = React.createContext()
//provider
export class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: [...detailGrooming, ...detailHorse, ...detailRider, ...detailSouvenir],
		storeProducts: [...storeGrooming, ...storeHorse, ...storeRider, ...storeSouvenir],
		cart : [],
		modelOpen: false,
		modelProduct: [...detailGrooming, ...detailHorse, ...detailRider, ...detailSouvenir],
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
	}

	result = Object.keys(this.state.storeProducts).map((item)=>{
		return this.state.storeProducts[item]
	  });

	componentDidMount() { //2
		this.setProducts()
	}
	setProducts = () => {
		let tempProducts = [] //1
		this.result.forEach(item => {
			const singleItem = { ...item }
			tempProducts = [...tempProducts, singleItem] //1
		})
		;
		this.setState(() => {
			return { products: tempProducts }
		})
	}

	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	}

	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product }
		})
	}

	addToCart = (id) => {
		let tempProducts = [...this.state.products]
		const index = tempProducts.indexOf(this.getItem(id))
		const product  = tempProducts[index]
		product.inCart = true
		product.count = 1
		const price = product.price
		product.total = price
		this.setState (() => {
			return {
				products : tempProducts,
				cart : [...this.state.cart, product],
			}
		}, () => {this.addTotal()})
	}

	openModel = (id) => {
		const product = this.getItem(id)
		this.setState(() => {
			return {
				modelProduct: product,
				modelOpen: true}
		})
	}

	closeModel = () => {
		this.setState(() => {
			return {modelOpen: false}
		})
	}

	increment = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.price * product.count;

		this.setState(() => {
			return {
				cart: [...tempCart]
			}
		}, () => {
			this.addTotal();
		}
		)
	}

	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;

		if (product.count === 0) {
			this.removeItem(id)
		}
		else {
			product.total = product.price * product.count;

			this.setState(() => {
				return {
					cart: [...tempCart]
				}
			}, () => {
				this.addTotal();
			}
			)
		}
	}

	removeItem = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter (item => item.id !== id);

		const index = tempProducts.indexOf(this.getItem(id));
		let removeProduct = tempProducts[index];
		removeProduct.inCart = false;
		removeProduct.count = 0;
		removeProduct.total = 0;

		this.setState (() => {
			return {
				cart: [...tempCart],
				products: [...tempProducts]
			}
		}, () => {
			this.addTotal();
		} )
	}

	clearCart = () => {
		this.setState(() => {
			return { cart: [] };
		}, () => {
				this.setProducts();
				this.addTotal();
			}
		);
	}

	addTotal = () => {
		let subTotal = 0;
		this.state.cart.map(item => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		this.setState ( ()=> {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total,
			}
		})
	}

	/** REFERENCE ISSUE: MANIPULATING REFERENCES INSTEAD DATA VALUE

	 tester = () => {
	  console.log('State products:', this.state.products[0].inCart)
	  console.log('Data products: ', storeProducts[0].inCart)

	  const tempProducts = [...this.state.products]
	  tempProducts[0].inCart = true

	  this.setState (() => {
		products: tempProducts
	  }, () => {
		console.log('State products:', this.state.products[0].inCart)
		console.log('Data products: ', storeProducts[0].inCart)
	  })
	} */

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModel : this.openModel,
				closeModel: this.closeModel,
				increment: this.increment,
				decrement: this.decrement,
				removeItem: this.removeItem,
				clearCart: this.clearCart,
			}}>
				{/** REFERENCE ISSUE: <button onClick={this.tester}>Tester method</button> */}
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

//consumer
export const ProductConsumer = ProductContext.Consumer;
