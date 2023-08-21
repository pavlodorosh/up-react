import React from "react";
import {Link} from 'react-router-dom';

class Goods extends React.Component{

    handlerAddToCart = () =>{
        this.props.addToCart(this.props.product.id);
    }
    render(){
        const { title, cost } = this.props.product;
        return(
            <>
            <div className="goods">
                <img src="" alt="" />
                <div>{title}</div>
                <div>{cost}</div>
                <Link to={`/product/${this.props.product.articul}`}>Link to product page</Link>
                <button onClick={this.handlerAddToCart}>
                    Add to cart
                </button>
            </div>
            </>
        )
    }
}

export default Goods;