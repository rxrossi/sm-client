import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Home = () => <p>Home</p>

const SignOut = () => <p>Sign out</p>

const SignedOutRouter = () => (
  <div>
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
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </div>
);

const SignedInRouter = () => (
  <div>
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
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signout" component={SignOut} />
    </div>
  </div>
);

const Router = ({ signed }) => {
  if (signed) {
    return <SignedInRouter />
  }
  return <SignedOutRouter />
}

const App = () => (
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
)

export default App;
