import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyCart () {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1> Your  cart is currently empty!</h1>
                    <h3>Go to</h3>
                    <Link to='/'>
                        <button className="btn btn-dark text-uppercase mb-3 px-5" type="button">
                            Products
                        </button>
                    </Link>
                </div>
            </div>    
        </div>
        )
}
