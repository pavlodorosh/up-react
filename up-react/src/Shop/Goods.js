import React from "react";
import {Link} from 'react-router-dom';

class Goods extends React.Component{

    handlerAddToCart = () =>{
        this.props.addToCart(this.props.product.id);
    }
    render(){
        const { title, cost, image, articul } = this.props.product;
        const trimArticul = articul.trim();
        return(
            <>
            <div className="goods">
                <img src={image} alt={title}/>
                <div>{title}</div>
                <div>{cost}</div>
                <Link to={`/product/${trimArticul}`}>To Product Page</Link>
                <button onClick={this.handlerAddToCart}>
                    Add to cart
                </button>
            </div>
            </>
        )
    }
}

export default Goods;