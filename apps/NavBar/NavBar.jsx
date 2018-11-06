import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftNavbar from './LeftNavbar.jsx';
import TopNavbar from './TopNavbar.jsx';

class NavBar extends Component {

    render() {
        return (
            <div>
                <LeftNavbar />
                <TopNavbar />
            </div>
        );
    }

}

export default NavBar;
