import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context/Context'
import {ButtonContainer} from '../styles/Button'
import {Link} from 'react-router-dom'

export default class Model extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {modelOpen, closeModel} = value;
                        const {img, title, price} = value.modelProduct;
                        if (!modelOpen) {
                            return null
                        }else {
                            return <ModelContainer>
                                    <div className='container'>
                                        <div className='row'>
                                            <div id="model" className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize '>
                                                <h5 className="text-center text-uppercase font-weight-bold">Item is added to the cart</h5>
                                                <img src={img} style={{width:'20rem', height:'20rem'}} className="image-fluid" alt="product"></img>
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price: €{price}</h5>
                                                <Link to='/'>
                                                    <ButtonContainer onClick={() => closeModel()}>
                                                        Continue Shopping
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to='../pages/cart'>
                                                    <ButtonContainer cart onClick={() => closeModel()}>
                                                        Go To Cart
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </ModelContainer>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

const ModelContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #model {
        background: var(--mainWhite);
    }
`;
