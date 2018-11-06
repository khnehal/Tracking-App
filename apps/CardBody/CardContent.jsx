import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardContent extends Component {

   render() {
        let ele = null;
        const { tripId, transporter, fromAdd, to, driverDetails, lastKnown, checkpoint,
            items, description, isNameCard, number, value, hasProgressBar, buttonText, bgColor } = this.props;

        const cardColor = {
            borderColor: bgColor,
            color: bgColor
        };

        if (isNameCard) {
            ele = (
                <div>
                    <div className="row detailSection">
                        <div className="col-xs-12 col-md-12">
                            {number && <p className="nameCardTitle"> {number}</p>}
                            {value && <p className="nameCardValue"> {value}</p>}
                        </div>
                    </div>

                </div>
            );
        } else {
            ele = (
                <div>
                    <div className="row detailSection cardContentDetails">
                        <div className="col-xs-12 col-md-6">
                            {tripId && <p><b>Trip id:</b> {tripId}</p>}
                            {transporter && <p><b>Transporter id:</b> {transporter}</p>}
                            {driverDetails && <p><br /><b>Driver details:</b><br /> {driverDetails}</p>}
                            {items && <p><b><br />Items:</b><br /> {items}</p>}
                            {description && <p>{description}</p>}
                        </div>
                        <div className="col-xs-12 col-md-6">
                            {fromAdd && <p><b>From:</b> {fromAdd}</p>}
                            {to && <p><b>To:</b> {to}</p>}
                            {lastKnown && <p><br /><b>Last known details:</b><br /> {lastKnown}</p>}
                            {checkpoint && <p><br /><b>Check Point:</b> {checkpoint}</p>}
                            {
                                hasProgressBar
                                &&
                                <ul id="progress">
                                    <li><div className="node pink"></div><p>Mumbai, Maharastra</p></li>
                                    <li><div className="divider pink"></div></li>
                                    <li><div className="node pink"></div><p>Place State</p></li>
                                    <li><div className="divider grey"></div></li>
                                    <li><div className="node grey"></div><p>Place State</p></li>
                                    <li><div className="divider grey"></div></li>
                                    <li><div className="node grey"></div><p>Place State</p></li>
                                </ul>
                            }
                            {
                                buttonText
                                &&
                                <button className="btn card-buttons" style={cardColor}> {buttonText} </button>
                            }
                        </div>
                    </div>
                </div>
            );
        }

        return ele;
   }

}


CardContent.propTypes = {
    isNameCard: PropTypes.bool,
    tripId: PropTypes.string,
    transporter: PropTypes.string,
    fromAdd: PropTypes.string,
    to: PropTypes.string,
    driverDetails: PropTypes.string,
    lastKnown: PropTypes.string,
    checkpoint: PropTypes.string,
    items: PropTypes.string,
    description: PropTypes.string,
    number: PropTypes.string,
    value: PropTypes.string,
    hasProgressBar: PropTypes.bool,
    buttonText: PropTypes.string,
    bgColor: PropTypes.string
};

export default CardContent;
