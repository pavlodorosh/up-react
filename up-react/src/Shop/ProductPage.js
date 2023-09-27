import React from "react";

class ProductPage extends React.Component{
    getAtributeFromUrl(){
        const urlParts = window.location.href.split('/');
        return urlParts[urlParts.length-1];
    }
    render(){
        const { products, addToCart } = this.props;
        const articul = this.getAtributeFromUrl();
        const product = products.find(product => product.articul.trim() === articul);

        return(
            <>
            <div className="product-page">
                <h1>Product Page</h1>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title}/>
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