import React from "react";

class CartPage extends React.Component{

    render(){
        const {products, cart }= this.props;
        return(
            <>
            <h1>Cart Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Назва</th>
                        <th>Кількість</th>
                        <th>Варість</th>
                    </tr>
                    <tbody>
                        {Object.keys(cart).map((productId) => {
                            const product = products.find( (p) => p.id === Number(productId) );
                            return(
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{cart[productId]}</td>
                                    <td>{cart[productId]*product.cost}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </thead>
            </table>
            </>
        );
    }
}

export default CartPage;