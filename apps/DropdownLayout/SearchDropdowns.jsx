import React, { Component } from 'react';
import PropTypes from 'prop-types';

var tabs = [
    { name: 'ALL', value: '54' },
    { name: 'FTL', value: '26' },
    { name: 'LCL', value: '16' },
    { name: 'Courier', value: '10' },
    { name: 'Container', value: '03', }
];

var extraTabs = [
    { name: 'Inbound', value: '30' },
    { name: 'Outbound', value: '16'}
];

class SearchDropdowns extends Component {

    constructor() {
        super();
        this.state = {
            activeBtn: null,
        };
    };

    componentWillMount() {
        this.setState({ activeBtn: tabs[0].name });
    }

    activeTab(name) {
        this.setState({ activeBtn: name });
    }

    renderButtons(name, value, id) {
        const { activeBtn } = this.state;
        const classes = (activeBtn === name) ? "btn active" : "btn";

        return (
            <button
                key={id}
                type="button"
                className={classes}
                value="ALL (54)"
                onClick={() => this.activeTab(name)}
            >
                {name} ({value})
            </button>
        );
    }

    render() {
        return (
            <div className="row dropdowns-container">
                <div className="col-xs-12 col-md-8">
                    <div className="btn-group">
                        {
                            tabs.map((item, i) => {
                                return this.renderButtons(item.name, item.value, (i + 1));
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <form className="form-inline search-nav">
                                <i className="fa fa-search"></i>
                                <input className="form-control" type="search" placeholder="Search transporter" aria-label="Search" />
                            </form>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <form className="form-inline search-nav">
                                <i className="fa fa-search"></i>
                                <input className="form-control" type="search" placeholder="Search plant/depot" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="btn-group">
                        {
                            extraTabs.map((item, i) => {
                                return this.renderButtons(item.name, item.value, (i + 1));
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                            <form className="form-inline search-nav">
                                <i className="fa fa-search"></i>
                                <input className="form-control" type="search" placeholder="Search item" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchDropdowns;
