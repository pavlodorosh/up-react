import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function CartList(){
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] =item;
        return accum;
    }, {});

    return(
        <div>
            <ul>
                {Object.keys(cart).map(item => (
                    <li key={item+goodsObj[item]['title']}>
                        {goodsObj[item]['title']} - {cart[item]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartList;