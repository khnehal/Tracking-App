import React, { Component } from 'react';
import PropTypes from 'prop-types';

import source from './names.json';
import NameCard from './NameCard.jsx';

class NameCardLayout extends Component {

    renderTiles(item) {
        if (Object.keys(item).length > 0) {
          return (
            <NameCard
                title = {item.name}
                number={item.number}
                value={item.value}
                positive_value={item.positive_value}
                negative_value={item.negative_value}
                bgColor={item.bgColor}
            />
          );
        }

        return null;
    };

    render() {
        return (
            <div className="row">
                {
                    source.map((item, i) => {
                        return (
                            <div className="col-xs-12 col-md-2 NameCardTiles" key={(i + 1)}>
                                {this.renderTiles(item)}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default NameCardLayout;
