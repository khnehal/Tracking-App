import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardHeader from './../CardBody/CardHeader.jsx';
import CardContent from './../CardBody/CardContent.jsx';
import CardFooter from './../CardBody/CardFooter.jsx';

class NameCard extends Component {

    render() {
        const { title, number, value, positive_value, negative_value, bgColor} = this.props;
        const styles = {
            'backgroundColor': bgColor,
            'paddingLeft': '10px',
            'paddingBottom': '5px',
            'color': 'white'
        };

        return (
            <div className="cardContainer" style={styles}>
                <CardHeader
                    isNameCard={true}
                    title={title}
                />
                <CardContent
                    isNameCard={true}
                    number={number}
                    value={value}
                />
                <CardFooter
                    isNameCard={true}
                    positive_value={positive_value}
                    negative_value={negative_value}
                />
            </div>
      );
    }

}

NameCard.propTypes = {
    title: PropTypes.string,
    number: PropTypes.string,
    value: PropTypes.string,
    positive_value: PropTypes.string,
    negative_value: PropTypes.string,
    bgColor: PropTypes.string
};

export default NameCard;
