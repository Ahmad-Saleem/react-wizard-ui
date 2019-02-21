import React, { Component, Suspense, lazy  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AddActivity = lazy(() => import('./screens/activity/AddActivity'));
const AddAddress = lazy(() => import('./screens/activity/AddAddress'));
const Home = lazy(() => import('./screens/home'));
const Activity = lazy(() => import('./screens/activity'));
const ConfirmActivity = lazy(() => import('./screens/activity/ConfirmActivity'));



class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/activity/id" component={Activity}/>
            <Route path="/activity/add" component={AddActivity}/>
            <Route path="/activity/address/add" component={AddAddress}/>
            <Route path="/activity/confirm" component={ConfirmActivity}/>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
