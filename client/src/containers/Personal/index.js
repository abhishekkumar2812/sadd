import React, { Component } from 'react';
import BodyContent from '../../components/BodyContent/BodyContent';
import Footer from '../../components/Footer/Footer';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import NavBar from '../../components/Navbar/NavBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import SubscribeModal from '../../components/SubscribeModal/SubscribeModal';
// import Footer from '../../components/Footer/Footer.js';
// import FooterTemp from '../../components/Footer/FooterTemp';

class Temp extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <LeftSideBar/>
                {/* <RightSideBar/>
                <BodyContent/> */}
                {/* <SubscribeModal/> */}
                <Footer/>
            </div>
        );
    }
}

export default Temp;
