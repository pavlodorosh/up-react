import React from "react";

class ProductPage extends React.Component{
    render(){
        const { products, math, addToCart} = this.props;
        const articul =math.params.articul;
        const product = products.find(product=>product.articul === articul);

        return(
            <>
            <div className="product-page">
                <h2>{product.title}</h2>
                <img src={product.image}/>
                <strong>{product.cost}</strong>
                <button onClick={
                    () => addToCart(product.id)
                }>
                    Add to cart
                </button>
            </div>
            </>
        );
    }
}

export default ProductPage;