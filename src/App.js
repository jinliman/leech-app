import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppLayout = lazy(() => import('./layouts/app/App'));

const mapStateToProps = () => {
  return {};
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3modal: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/">
                <AppLayout />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
