import React, { Component } from 'react';
import history from './history'
import { Router , Route, Switch } from "react-router";

import HomePage from "./container/homepage/HomePageContainer";
import Step1Page from "./container/step-1-container/FlightIdContainer";
import Step2Page from "./container/step-2-container/BarcodeScanContainer";
import WaybillCheckingPage from "./container/waybill-check-container/WaybillCheckingContainer";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/create-flight-id' component={Step1Page}/>
          <Route exact path='/barcode-scan' component={Step2Page}/>
          <Route exact path='/waybill-check' component={WaybillCheckingPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
