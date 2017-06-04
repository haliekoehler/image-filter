import React from 'react';

export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: props.text
        };
    };

    render(){

        return(
            <button>{this.props.text}</button>
        );

    }
}