import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { App, Box } from 'grommet';
import '../node_modules/grommet-hpe-css';
import reducers from './redux/reducers';
import Auth from './Auth';
import Login from './components/login';
import Signup from './components/signup';
import Feedback from './components/feedback';
import Questions from './components/questions';
import Instaction from './components/instaction';
import Callback from './components/callback';
import Header from './components/header'

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk)
);
const auth = new Auth();
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class MainRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginRedirectRef: false,
      signRedirectRef: false
    }
  }


  render() {
    return (
      <Provider store={store}>
        <HashRouter>
        <App centered={false}>
        <Header {...this.props}/>
          <Box pad='medium'>
              <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/instruction" component={Instaction} />
                <Route exact path="/questions" component={Questions} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
                }} />
              </Switch>
            </Box>
          </App>
        </HashRouter>
      </Provider>
    );
  }
}

export default MainRoute;
