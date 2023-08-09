import React from "react";

class Comp1 extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            comments : []
        };
        this.textareaValue = React.createRef();
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount,
        })
    }
    addComment = () => {
        let comment = this.textareaValue.current.value;
        let comments = this.state.comments;
        comments.push(comment);
        this.setState({
            'comments' : comments
        })
        this.textareaValue.current.value = '';
    }

    render(){
        return(
            <>
            <h1>State</h1>
            <div><button onClick={this.handler}>This button chadge state</button></div>
            <div>{this.state.count}</div>
            <hr></hr>
            <div>
                <textarea ref={this.textareaValue}></textarea>
                <button  onClick={this.addComment}>Comment</button>
            </div>
            <div>
                <ul>
                    {this.state.comments.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            </>
        )
    }
}

export default Comp1;