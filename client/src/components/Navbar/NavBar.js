import React, { Component } from 'react';
import SubscribeModal from '../SubscribeModal/SubscribeModal';
import { NavbarContainer, NavItems, NavList } from './styles';
import {Link} from 'react-router-dom';

class NavBar extends Component{

    // itemClick = (e) => {
    //     e.preventDefault()
    //     console.log('sdf')
    //    const temp = e.target.getAttribute('data-location');
    //    location.href = `${temp}`;
    //    console.log(temp)
       
    // }

    render(){
        return(
            <div>
                <NavbarContainer>
                    <SubscribeModal/>
                    <NavList>
                        <NavItems>
                        <Link to='/'>
                            home
                            </Link>
                        </NavItems>
                        
                        <NavItems>
                        <Link to='/'>
                            pictures
                            </Link>
                        </NavItems>
                        <NavItems>
                        <Link to='/'>
                            contact
                            </Link>
                        </NavItems>
                        
                        {/* <NavItems onClick={this.itemClick} data-location='/journal'> */}
                        <NavItems>
                        <Link to='/personal'>
                            journal
                            </Link>
                        </NavItems>      
                    </NavList>
                </NavbarContainer>
            </div>
        )
    }
}

export default NavBar;