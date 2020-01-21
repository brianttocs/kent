import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import {ProductProvider} from '../components/context';
import NavBar from './api/NavBar';
// import Cart from './cart';
import ProductList from '../pages/ProductList';
//import Details from '../pages/Details';
// import Default from '../pages/Default';
// import Model from './api/Model';
//import Contact from '../pages/Contact';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ProductList} />
                    {/* <Route path='/details' component={Details} />
                    <Route path='/pages/Contact' component={Contact} />
                    <Route path='./cart' component={Cart} /> */}
                </Switch>
            </React.Fragment>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(
        // <ProductProvider>
        <Router>
            <Index />
        </Router>
        // </ProductProvider>
        ,
        document.getElementById('index'));
}
