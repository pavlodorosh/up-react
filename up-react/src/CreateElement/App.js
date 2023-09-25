import React from "react";
function App(){

    const cE = React.createElement;
    const title = React.createElement('h1',{}, 'Text create elment Header 1');
    const cEInput = cE('h1',{}, "Text create elment Header 1");
    const sP = cE('span', {}, 'this is span');
    const pP = cE('p', {}, sP);
    const title2 = cE(
        'h2', {
            'data-color': 'red',
            'style':{
                'color':'red',
                'backgroundColor':'orange'
            },
            'id':'idh2',
            'className':'classh2'
        }, 'Text title2 '
    )
    return(
        <>
        <React.Fragment>
            {title}
        </React.Fragment>
        <hr/>
        <div>
            {cEInput}
        </div>
        <hr/>
        <div>
            {pP}
        </div>
        <hr/>
        <div>
            {title2}
        </div>
        <hr/>
        <div>
            {cE('span', {}, 'this is span')}
        </div>
        </>
    )
}

export default App;