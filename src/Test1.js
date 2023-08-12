import React from "react";
class Test1 extends React.Component{
    constructor(props){
        console.clear();
        console.log('constructor');
        console.log(props);
        super();
        this.state = {
            s1 : props.arg
        }
    }
    buttonHandler = () =>  {
        let val = this.state.s1;
        val++;
        this.setState({s1:val});
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        // return ({"s1": props.arg});
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        console.log('render 1');
        return(
            <>
            {console.log('render 2')}
            <div>
                <button onClick={this.buttonHandler}>Push</button>
            </div>
            <div>
                {this.state.s1}
            </div>
            </>
        )
    }

}
export default Test1;