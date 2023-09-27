import React  from "react";

class CompInputs extends React.Component{
    constructor(){
        super();
        this.state = {
            results : []
        };
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
    }
    handler = () => {
        let input1 = this.textInput1.current.value;
        let input2 = this.textInput2.current.value;

        let result = input1*input2;

        console.log('handler');
        let results = this.state.results;
        results.push(result);
        this.setState({
            'results' : results
        });

        this.textInput1.current.value = '';
        this.textInput2.current.value = '';
    }
    static getDerivedStateFromProps(props,state){
        // let input1 = this.textInput1.current.value;
        // let input2 = this.textInput2.current.value;
        console.log('getDerivedStateFromProps');
        // console.log(input1,input2);
        console.log(state);
        // return ({"s1": props.arg});
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
        // let input1 = this.textInput1.current.value;
        // let input2 = this.textInput2.current.value;
        // console.log(input1,input2);
        // console.log(input1*input2);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
        // let input1 = this.textInput1.current.value;
        // let input2 = this.textInput2.current.value;
        // console.log(input1,input2);
        // console.log(input1*input2*10);
    }
    render(){
        return(
            <>
            <h1>CompInputs</h1>
            <hr></hr>
            <div>
                <input type="text" ref={this.textInput1} defaultValue='1'/>
                <input type="text" ref={this.textInput2} defaultValue='2'/>
                <button  onClick={this.handler}>Result</button>
            </div>
            <div>
                <ul>
                    {this.state.results.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            </>
        )
    }
}
export default CompInputs;