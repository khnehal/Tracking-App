import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFooter extends Component {

    render() {
        const { positive_value, negative_value, isNameCard } = this.props;
        let ele = null;

        if (isNameCard) {
            ele = (
                <div>
                    {positive_value && <p className="nameCardFooterLeft"> {positive_value} </p>}
                    {negative_value && <p className="nameCardFooterRight"> {negative_value} </p>}
                </div>
            );
        }

        return ele;
    }
}

CardFooter.propTypes = {
    positive_value: PropTypes.string,
    negative_value: PropTypes.string,
    isNameCard: PropTypes.bool,
};

export default CardFooter;
