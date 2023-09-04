import React from "react";
import { connect, useDispatch } from "react-redux";
import { addGoods } from "../action";

const Goods = () =>{
    const dispatch = useDispatch();
    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                let id = e.target.elements.id.value;
                let title = e.target.elements.title.value;
                let image = e.target.elements.image.value;

                console.log(id);
                console.log(title);
                console.log(image);

                dispatch( addGoods(id, title, image) );
            }}>
                <input name="id" defaultValue='ldshfls54fg6' />
                <input name="title" defaultValue='new good' />
                <input name="image" defaultValue="https://content2.rozetka.com.ua/goods/images/preview/306988973.jpg" />
                <button tupe="submit">
                    Add new Good
                </button>
            </form>
        </div>
    )
}

export default connect()(Goods)