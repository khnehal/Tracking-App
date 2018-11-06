import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardHeader from './../CardBody/CardHeader.jsx';
import CardContent from './../CardBody/CardContent.jsx';
import CardFooter from './../CardBody/CardFooter.jsx';

class DetailCard extends Component {

   render() {
        const { value, title, tripId, transporter, fromAdd, to, driverDetails, lastKnown,
            checkpoint, items, description, hasProgressBar, buttonText, bgColor } = this.props;

        return (
            <div className="cardContainer">
                <CardHeader
                    title={title}
                    value={value}
                    bgColor={bgColor}
                />
                <CardContent
                    tripId={tripId}
                    transporter={transporter}
                    fromAdd={fromAdd}
                    to={to}
                    driverDetails={driverDetails}
                    lastKnown={lastKnown}
                    checkpoint={checkpoint}
                    items={items}
                    description={description}
                    hasProgressBar={hasProgressBar}
                    buttonText={buttonText}
                    bgColor={bgColor}
                />
                {/*<CardFooter />*/}
            </div>
      );
   }

}

DetailCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    tripId: PropTypes.string,
    transporter: PropTypes.string,
    fromAdd: PropTypes.string,
    to: PropTypes.string,
    driverDetails: PropTypes.string,
    lastKnown: PropTypes.string,
    checkpoint: PropTypes.string,
    items: PropTypes.string,
    description: PropTypes.string,
    hasProgressBar: PropTypes.bool,
    buttonText: PropTypes.string,
    bgColor: PropTypes.string,
};

export default DetailCard;
