import React from 'react';
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import RequiredSignInRoute from './RequireSignInRoute';
import RequiredSignOutRoute from './RequireSignOutRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';

const defaultState = {
  token: true
}

const Home = () => (
  <p> Home </p>
)

const SignOut = () => <p>Sign out</p>


function auth(state = defaultState, action) {
  if (action.type === 'TOGGLE') {
    return {
      token: !state.token
    }
  }
  return state
}

const reducers = combineReducers({
  auth
});

const store = createStore(reducers)

const App = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)

export default App;

let Router = (props) => (
  <div>
    <NavBar authenticated={props.authToken} />
    <button onClick={() => store.dispatch(toggleSignIn())}>Toggle SignIn</button>
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
Router = withRouter(connect(mapState)(Router))

function toggleSignIn() {
  return {
    type: 'TOGGLE'
  }
}
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
