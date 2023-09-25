import React from "react";
import {Link} from 'react-router-dom';
import Goods from "./Goods";

class HomePage extends React.Component{

    render(){
        return(
            <>
            <h1>Home page</h1>
            <div className="goods-list">
                {this.props.products.map( (product) => (
                    <Goods key={product.articul} product={product} addToCart={this.props.addToCart}/>
                ))}
            </div>
            <Link to="/cart">Go to Cart</Link>
            </>
        );
    }
}

export default HomePage;