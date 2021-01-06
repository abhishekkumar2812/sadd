import React, { Component } from 'react';
import { RightSideBarContainer, ArrowContainer } from './styles';

class RightSideBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            rightBar: true
        };
    }

    toggleRightBar = (e) => {
        this.setState(
            {
                rightBar: !this.state.rightBar
            }
        )
    }

    render(){
        return(
            <div>
                <RightSideBarContainer rightBar={this.state.rightBar}>
                </RightSideBarContainer>
                <ArrowContainer onClick={this.toggleRightBar} rightBar={this.state.rightBar}/>
            </div>
        )
    }
}

export default RightSideBar;