/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './header.scss';

const mapStateToProps = () => {
  return {};
};

class HeaderLayout extends Component {
  // Render Content
  render() {
    return (
      <div id="app-header">
        <div className="container">
          <a href="/" id="app-header__logo">
            <h2>Leech Farm</h2>
          </a>
          <a
            onClick={() => {}}
            className="btn-primary"
          >
            Connect Wallet
          </a>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(HeaderLayout));
