import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderLayout from '../header/Header';

import './app.scss';

const mapStateToProps = () => {
  return {};
};

class AppLayout extends Component {
  // Render Content
  render() {
    /*
    <Suspense fallback={null}>
      <Switch>
        <Route path="/app/proposal/new" exact>
          <NewProposalView />
        </Route>
      </Switch>
    </Suspense>
    */

    return (
      <div id="app-wrapper">
        <HeaderLayout />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AppLayout));
