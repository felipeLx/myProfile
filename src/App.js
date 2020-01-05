import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Profile from './containers/Profile/Profile';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Experience = React.lazy(() => {
  return import('./containers/Experience/Experience');
});

const Games = React.lazy(() => {
  return import('./containers/Games/Games');
});

const Contact = React.lazy(() => {
  return import('./containers/Contact/Contact');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Route path="/" exact component={Profile} />
      <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated) {
    routes = ( 
      <Switch>
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Route path="/experience" render={props => <Experience {...props} />} />
        <Route path="/games" render={props => <Games {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/" exact component={Profile} />
        <Redirect to="/" />
    </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
