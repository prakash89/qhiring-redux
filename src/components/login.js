import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { Redirect, HashRouter } from 'react-router-dom';
import Auth from '../Auth';
import { Button } from 'grommet';
import Box from 'grommet/components/Box';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  authLogin() {
    console.log("Inside the authLogiin button click")
    const auth = new Auth();
    auth.login();
  }

  loginSubmit(user_params) {

    let params = {
      email: user_params.username,
      password: user_params.password
    }
    this.props.login(params)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message == "You have successfully signed up.") {
      console.log('componentWillReceiveProps', this.props);
      this.props.history.push('/instaction')
    }
  }

  render() {
    return (
      <Box
        justify='center'
        align='center'
        wrap={true}
        reverse={false}
        pad='medium'
        margin='small'
      >
        <LoginForm
          title='Login'
          rememberMe={false}
          onSubmit={(user_params) => this.loginSubmit(user_params)} />
        <Button
          label='Login through auth0'
          onClick={() => this.authLogin()} />
      </Box>
    )
  }
}

const mapStateToProps = ({ loginData }) => {
  localStorage.setItem('idToken', loginData.id_token);
  localStorage.setItem('userEmail', loginData.email);
  localStorage.setItem('userId', loginData.user_id);
  return ({
    message: loginData.message,
    idToken: loginData.id_token,
    email: loginData.email
  })
}




export default connect(mapStateToProps, { login })(Login);
