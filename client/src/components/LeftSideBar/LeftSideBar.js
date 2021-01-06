import React, { Component } from 'react';
import { ArrowContainer, LeftSideBarContainer } from './styles';

class LeftSideBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            leftBar: true
        };
    }

    toggleLeftBar = (e) => {
        this.setState(
            {
                leftBar: !this.state.leftBar
            }
        )
    }

    render(){
        return(
            <div>
                <LeftSideBarContainer leftBar={this.state.leftBar}>
                </LeftSideBarContainer>
                <ArrowContainer onClick={this.toggleLeftBar} leftBar={this.state.leftBar}/>
            </div>
        )
    }
}

export default LeftSideBar;