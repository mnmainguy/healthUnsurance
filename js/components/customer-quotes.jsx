import React from "react";
import { HorizontalSplit } from "./horizontal-split.jsx";
import PropTypes from 'prop-types';

export class CustomerQuote extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="neal-customer-quote">
        <div className="neal-customer-quote-quote">{this.props.children}</div>
        <div className="neal-customer-quote-profile">
          <img className="neal-customer-quote-img img-responsive" src={this.props.imageUrl}/>
          <span className="neal-customer-quote-name">{this.props.name}</span>
          <span className="neal-customer-quote-title">{this.props.title ? `, ${this.props.title}` : null}</span>
        </div>
      </div>
    );
  }

}

export class CustomerQuotes extends React.Component {

  static propTypes = {
    // TODO: Enforce CustomerQuote type
    children: PropTypes.arrayOf(PropTypes.element),
  };

  render() {
    return (
      <div className="neal-customer-quotes">
        <HorizontalSplit>
          {this.props.children}
        </HorizontalSplit>
      </div>
    );
  }
}

CustomerQuotes.Quote = CustomerQuote;
