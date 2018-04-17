import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RequiredSignInRoute from '../RequireSignInRoute';
import RequiredSignOutRoute from '../RequireSignOutRoute';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const Router = (props) => (
  <div>
    <NavBar authenticated={props.authToken} />
    <div>
      <Route exact path="/" component={Home} />
      <RequiredSignOutRoute authenticated={props.authToken} path="/signin" component={SignIn} />
      <RequiredSignOutRoute authenticated={props.authToken} path="/signup" component={SignUp} />
      <RequiredSignInRoute authenticated={props.authToken} path="/signout" component={SignOut} />
    </div>
  </div>
)

const mapState = state => ({
  authToken: state.auth.token
})

export default withRouter(connect(mapState)(Router))

const Home = () => (
  <p> Home </p>
)

const SignOut = () => <p>Sign out</p>

const NavBar = ({ authenticated }) => {
  if (authenticated) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      </nav>
    )
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}
