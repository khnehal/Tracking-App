import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeftNavbar extends Component {

    render() {
        return (
            <div className="leftSidebar">
                <a href="#home">
                    <i className="fa fa-tachometer"></i> <span> Dashboard </span>
                </a>
                <a href="#services">
                    <i className="fa fa-truck"></i> <span> Tips </span>
                </a>
                <a href="#clients">
                    <i className="fa fa-map-marker"></i> <span> Tracking </span>
                </a>
                <a href="#contact">
                    <i className="fa fa-users"></i> <span> Transporters </span>
                </a>
                <a href="#contact">
                    <i className="fa fa-bar-chart"></i> <span> Analytics </span>
                </a>
                <a href="#contact">
                    <i className="fa fa-gears"></i> <span> Settings </span>
                </a>
            </div>
        );
    }

}

export default LeftNavbar;
