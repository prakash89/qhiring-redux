import auth0 from 'auth0-js';
import browserHistory from './history';
import API_END_POINT from './Api';

export default class Auth {

  constructor() {
    // super();
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.auth0 = new auth0.WebAuth({ domain: 'qwinix-saml.auth0.com', clientID: '4KKmrFNDdTws8aPidkIBf63qOIclDqMB', redirectUri: `${API_END_POINT}callback`, audience: `${API_END_POINT}`, responseType: 'code token id_token', scope: "openid profile" });
  }



login() {
  console.log("Inisde Login")
  console.log(`Inside the Login auth0: ${this.auth0}`)
  this.auth0.authorize();
}

handleAuthentication() {
  this.auth0.parseHash((err, authResult) => {
    console.log(`error: ${err} OR authResult: ${authResult}`)
    if (authResult && authResult.accessToken && authResult.idToken) {
      this.setSession(authResult);
      console.log(authResult)
      browserHistory.push('/instaction');
    } else if (err) {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    }
  });
}

setSession(authResult) {
  console.log("Inside the setSession");
  // Set the time that the access token will expire at
  let expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  /*If there is a value on the `scope` param from the authResult,
  use it to set scopes in the session for the user. Otherwise
  use the scopes as requested. If no scopes were requested,
  set it to nothing*/
  const scopes = authResult.scope || this.requestedScopes || '';

  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  localStorage.setItem('scopes', JSON.stringify(scopes));
  localStorage.setItem('email', authResult.idTokenPayload.name);
}

isAuthenticated() {
  // Check whether the current time is past the
  // access token's expiry time
  console.log("Inside the isAuthenticated");
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

getAccessToken() {
  console.log("Inside the getAccessToken");
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('No access token found');
  }
  return accessToken;
}

getProfile(cb) {
  console.log("Inside the getProfile");
  let accessToken = this.getAccessToken();
  this.auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      this.userProfile = profile;
    }
    cb(err, profile);
  });
}
}