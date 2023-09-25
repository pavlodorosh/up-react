

import './App.css';
import React, {useState} from 'react';

function App(){

  let textInput =React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('hello');

  function f1(arg){
    console.log('f1 work'+arg);
  }
  // function f2(){
  //   console.log('move');
  // }
  function showInput(event){
    // console.log('input');
    // console.log(this.value);
    // console.log(event);
    // console.log(event.target.value);
    console.log(textInput.current.value);
    textOut.current.innerHTML = textInput.current.value;
    setOutput(textInput.current.value);
  }

  return(
    <>
    <h1>Події</h1>
    <section>
      <h2>Button</h2>
      <button onClick={()=>f1(1)}>Push</button>
    </section>
    <section>
      <h2>Double click + mouse move</h2>
      {/* <div className='test' onDoubleClick={()=>f1(2)} onMouseMove={f2}></div> */}
      <div className='test' onDoubleClick={()=>f1(2)} ></div>
    </section>
    <section>
      <h2>Input</h2>
      <input type="text" onInput={showInput} ref={textInput} defaultValue='123'/>
      <p ref={textOut}></p>
      <h3>{output}</h3>
    </section>
    </>
  )
}
export default App;