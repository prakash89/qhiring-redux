import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import '../css/header.css';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header direction="row" size="large"
        pad={{ horizontal: 'medium' }}>
        <Title>Q-Hiring</Title>
        {this.props.location.pathname == '/' &&
          <Title> <Link to="/login" className="padding-left-fix">LogIn</Link></Title>
        }

        {this.props.location.pathname == '/login' &&
          <Title> <Link to="/" className="padding-left-fix">SignUp</Link></Title>
        }

      </Header>
    )
  }
}


export default withRouter(HeaderNav);
