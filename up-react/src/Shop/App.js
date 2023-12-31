import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import goodsArr from './goods.json';
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import CartPage from './CartPage';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : goodsArr,
            cart : {}
        }
    }
    addToCart = (productId) => {
        this.setState((prevState) => ({
            cart : {
                ...prevState.cart,
                [productId]:(prevState.cart[productId] || 0) + 1,
            }
        }))
    }
    render(){
        return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage products={this.state.products} addToCart={this.addToCart}/>}/>
                    <Route path="/product/:articul" element={<ProductPage products={this.state.products} addToCart={this.addToCart}/>}/>
                    {/* <Route
                        path="/product/:articul"
                        element={({params}) => {
                            const articul = params.articul
                            const selectedProduct = this.state.products.find( product =>  product.articul === articul )
                            return (
                               <ProductPage product={selectedProduct} addToCart={this.addToCart}/>
                            );
                        }} /> */}
                    <Route path="/cart" element={<CartPage products={this.state.products} cart={this.state.cart}/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;