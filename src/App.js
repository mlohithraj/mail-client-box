import './App.css';
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
    </div>
  );
}

export default App;
