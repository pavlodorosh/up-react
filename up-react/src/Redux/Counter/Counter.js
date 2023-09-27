import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment, selectCount, selectText} from'./counterSlice';

export default function Counter(){
    const count = useSelector(selectCount);
    const text = useSelector(selectText);
    const dispatch = useDispatch();
    const buttonHansled = () =>{
        dispatch(increment());
    }

    return(
        <>
        <button onClick={buttonHansled}>+</button>
        <h2>{count}</h2>
        <h2>{text}</h2>
        </>
    )
}