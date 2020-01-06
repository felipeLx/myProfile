import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Profile from './containers/Profile/Profile';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';

const Experience = React.lazy(() => {
  return import('./containers/Experience/Experience');
});

const Games = React.lazy(() => {
  return import('./containers/Games/Games');
});

const Contact = React.lazy(() => {
  return import('./containers/Contact/Contact');
});

const App = (props) => {
  
  let routes = ( 
      <Switch>
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Route path="/experience" render={props => <Experience {...props} />} />
        <Route path="/games" render={props => <Games {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Profile} />
        <Redirect to="/" />
    </Switch>
    );

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

export default withRouter(App);
