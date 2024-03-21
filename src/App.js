import './App.css';
import LoginPage from './components/WelcomePage/LoginPage';
import NonSignUpWelcome from './components/WelcomePage/NonSignUpWelcome';
import SignUp from './components/authentication/SignUp';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NonSignUpWelcome />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/welcome">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
