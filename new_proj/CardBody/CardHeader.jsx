import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardHeader extends Component {

   render() {
        const { title, value, isNameCard, bgColor } = this.props;
        const classes = (isNameCard) ? "nameCardHeader" : "cardHeader";
        const cardColor = {
            borderColor: bgColor
        };
        const valueColor = {
            color: bgColor
        };

        return (
            <div className={classes} data-color={bgColor} style={cardColor}>
                {title && <h3 className="cardTitle"> {title} </h3>}
                {value && <h4 className="cardValue"> Value: <span style={valueColor}> {value} </span> </h4>}
            </div>
        );
   }
}

CardHeader.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    isNameCard: PropTypes.bool,
    bgColor: PropTypes.string,
};

export default CardHeader;
