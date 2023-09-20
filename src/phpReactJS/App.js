import React, {useState} from "react";

function App(){

  const [t0, setT0] = useState();
  const [t1, setT1] = useState();
  const [t2, setT2] = useState();
  const [t3, setT3] = useState();
  const [t4, setT4] = useState();
  const [t5, setT5] = useState([]);

    function clickHandler(){
        fetch("http://reactphpget.dahpro.com.ua/",{
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({})
        })
          .then(response => response.text())
          .then(response => {
            console.log(response);
            setT0(response);
          })
    }
    function task1(){
        fetch("http://reactphp.dahpro.com.ua/",{
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ action: 1 })
        })
          .then(response => response.text())
          .then(response => {
            console.log(response);
            setT1(response);
          })
    }
    function task2 (event) {
        event.preventDefault()
        let elements = event.target.elements;
        let inp1 = elements['num1'].value
        let inp2 = elements['num2'].value
        fetch("http://reactphp.dahpro.com.ua/",{
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({action: 2, num1: inp1, num2: inp2})
        })
        .then(data => data.text())
        .then(data => setT2(data))
    }



    function task3 (event) {
        event.preventDefault()
        let elements = event.target.elements;
        let inp1 = elements['filename'].value;
        let inp2 = elements['filedata'].value;
        fetch("http://reactphp.dahpro.com.ua/", {
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({action: 3, filename: inp1, filedata: inp2})
        })
        .then(data => data.text())
        .then(data => {
        if(data > 0) setT3(inp1)
        if(data <= 0) setT3(false)
        })

    }

    function task4(event) {
        event.preventDefault()
        fetch("http://reactphp.dahpro.com.ua/", {
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({action:4})
        })
        .then(data => data.text())
        .then(data => setT4(data))
    }

    function task5(event) {
        event.preventDefault()
        fetch("http://reactphp.dahpro.com.ua/",{
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({action: 5})
        })
        .then(data => data.json())
        .then(data => setT5(data))
        // .then(data => console.log(data))
    }

    return(
        <>
        <div className="container">
            <h1>PHP - React JS</h1>
            <button onClick={clickHandler}>SHOW TEXT</button>
            <div>{t0}</div>
        </div>
        <hr/>

        <div>
            <h2>Час</h2>
            <button onClick={task1}>Отримати час</button>
            <div>{t1}</div>
        </div>
        <hr/>

        <div>
        <h2>Випадкове число</h2>
            <form action="" onSubmit = {task2}>
            <div><input type="number" name="num1" defaultValue="30"/></div>
            <div><input type="number" name="num2" defaultValue="44"/></div>
            <button type="sumbit">Push</button>
            </form>
            <p>{t2}</p>
        </div>
        <hr/>

        <div>
        <h2>Створення файлу</h2>
            <form action="" onSubmit = {task3}>
            <div><input type="text" name="filename"/></div>
            <div><input type="text" name="filedata" /></div>
            <button type="sumbit">Push</button>
            </form>
            <p>{(t3) ? <a href={`http://reactphp.dahpro.com.ua/files/${t3}`} rel="noopener" download>Скачать</a> : false}</p>
            <p>{t3}</p>
            </div>
        <hr/>

        <div>
        <h2>Іфнормація про пк</h2>
            <form action="" onSubmit = {task4}>
            <button type="sumbit">Push</button>
            </form>
            <p>{t4}</p>
        </div>
        <hr/>

      <div>
      <h2>Курс валют</h2>
        <form action="" onSubmit = {task5}>
          <button type="sumbit">Push</button>
        </form>
		<ul>
            {t5.map(item => <li key = {item.ccy}>{item.ccy} - {item.buy}</li>)}
        </ul>
      </div>

        </>
    )
}

export default App;