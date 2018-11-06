import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailCard from './DetailCard.jsx';
import source from './datasource.json';

class CardsLayout extends Component {

    constructor() {
        super();
        this.state = {
        };
    };

    renderfirstRow() {
        if (Object.keys(source).length > 0) {
          return (
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <DetailCard
                        title = {'Missing truck'}
                        value={source.value}
                        tripId={source.trip_id}
                        transporter={source.transporter}
                        fromAdd={source.from}
                        to={source.to}
                        driverDetails={source.driver_details}
                        lastKnown={source.last_known}
                        bgColor={'red'}
                    />
                </div>
                <div className="col-xs-12 col-md-6">
                    <DetailCard
                        title = {'Detention truck'}
                        value={source.value}
                        tripId={source.trip_id}
                        transporter={source.transporter}
                        fromAdd={source.from}
                        to={source.to}
                        driverDetails={source.driver_details}
                        checkpoint={source.checkpoint}
                        bgColor={'black'}
                    />
                </div>
            </div>
          );
        }

        return null;
    };

    renderSecondRow() {
        if (Object.keys(source).length > 0) {
          return (
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <DetailCard
                        title = {'High value shipment'}
                        value={source.value}
                        tripId={source.trip_id}
                        transporter={source.transporter}
                        driverDetails={source.driver_details}
                        items={source.items}
                        hasProgressBar={true}
                        buttonText={'View More'}
                        bgColor={'violet'}
                    />
                </div>
                <div className="col-xs-12 col-md-6 ">
                    <DetailCard
                        title = {'Do you know ?'}
                        value={source.value}
                        description={'There are 3 untracked shipments.'}
                        buttonText={'Start Tracking'}
                        bgColor={'green'}
                    />
                    <DetailCard
                        title = {'Transporter details'}
                        buttonText={'View All'}
                        bgColor={'brown'}
                    />
                </div>
            </div>
          );
        }

        return null;
    };

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderfirstRow()}
                </div>
                <div className="row">
                    {this.renderSecondRow()}
                </div>
            </div>
        );
    }
}

export default CardsLayout;
