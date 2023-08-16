import '../App.css';
import React, { useState } from 'react';

// import RefFunction from './RefFunction';
import RefClass from './RefClass';

function App(){

    const refRange = React.createRef();
    const refDiv = React.createRef();
    // const refFunction = React.createRef();
    const refrefClass = React.createRef();

    const [s1, setS1] = useState(50);

    let a = 37;
    function chedgeHandler(event){
        a = event.target.value;
        console.log(a);
        setS1(a);
    }
    function chedgeHandler2(){
        console.log(refDiv.current.value);
        refRange.current.style.border = "1px solid red";
        refDiv.current.style.border = "1px solid red";
        refDiv.current.style.width = '150px';
        console.log(refDiv.current.innerHTML);
        refDiv.current.innerHTML = s1;
        // console.log(refFunction);
        console.log(refrefClass);
        refrefClass.current.print();
    }

    return(
        <>
        <div> <input type="range" onChange={chedgeHandler} ref={refRange}/> </div>
        <div>Out in app: {a}</div>
        <div>State in app: {s1}</div>
        <div ref={refDiv}>1</div>
        {/* <RefFunction ref={refFunction}/> */}
        <RefClass ref={refrefClass}/>
        <button onClick={chedgeHandler2}>Click</button>
        </>
    )
}
export default App;