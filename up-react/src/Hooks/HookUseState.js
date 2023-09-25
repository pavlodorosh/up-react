import React, {useState} from "react";

export default function HookUseState(){
    // Оголошуємо змінну стану "count" з початковим значенням 0 та функцію для оновлення стану "setCount"
    const [count, setCount] = useState(0);

    // Функція для збільшення значення "count"
    const increment = () => {
        setCount(count + 1);
    };

    // Функція для зменшення значення "count"
    const decrement = () => {
        setCount(count - 1);
    };
    return(
        <>
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    );
}