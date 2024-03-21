import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import classes from './signUp.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SignUp = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [confirmEnteredPassword, setConfirmEnteredPassword] = useState('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const authorizHandler = async (e) => {
    e.preventDefault();

    const emailInputHandler = emailInputRef.current.value;
    const passwordInputHandler = passwordInputRef.current.value;

    if (!isLogin) {
      const confirmEnteredPasswordValue = confirmPasswordInputRef.current.value;
      setConfirmEnteredPassword(confirmEnteredPasswordValue);

      if (passwordInputHandler !== confirmEnteredPasswordValue) {
        alert('Password does not match. Please re-enter password...');
        return;
      }
    }

    let url;

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJEJQXRKSU3Y_zArycMPAC3dU7v2rlvMk';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJEJQXRKSU3Y_zArycMPAC3dU7v2rlvMk';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: emailInputHandler,
          password: passwordInputHandler,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || 'Authentication failed');
      }
      history.replace('/welcome');
      console.log('Successfully Signed Up');
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  return (
    <Form onSubmit={authorizHandler} className={classes.form}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <Row className="mb-1">
        <Form.Label className={classes.label} htmlFor="email">
          Email
        </Form.Label>
        <Form.Control
          className={classes.input}
          type="email"
          placeholder="Email"
          required
          ref={emailInputRef}
        />
      </Row>
      <Row className="mb-1">
        <Form.Label className={classes.label} htmlFor="password">
          New Password
        </Form.Label>
        <Form.Control
          className={classes.input}
          type="password"
          placeholder="Password"
          required
          ref={passwordInputRef}
        />
      </Row>
      {!isLogin && (
        <Row className="mb-1">
          <Form.Label className={classes.label} htmlFor="password">
            Confirm Password
          </Form.Label>
          <Form.Control
            className={classes.input}
            type="password"
            placeholder="Password"
            required
            ref={confirmPasswordInputRef}
          />
        </Row>
      )}
      <Button type="submit" className={classes.submit}>
        {isLogin ? 'Login' : 'Sign up'}
      </Button>
      <p>
        {isLogin ? "Don't have an Account?" : 'Have an Account?'}{' '}
        <button
          type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </Form>
  );
};

export default SignUp;
