import React, { useRef } from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';

const SignUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const authorizHandler = (e) => {
    e.preventDefault();

    const emailIputHandler = emailInputRef.current.value;
    const passwordInputHandler = passwordInputRef.current.value;
    const confirmPasswordInputHandler = confirmPasswordInputRef.current.value;

    let url;
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJEJQXRKSU3Y_zArycMPAC3dU7v2rlvMk';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: emailIputHandler,
        password: passwordInputHandler,
        confirmPpassword: confirmPasswordInputHandler,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        console.log('Succesfully Signed In');
        return res.json();
      } else {
        return res
          .json()
          .then((data) => {
            let errMessage = 'Authentication failed';

            throw new Error(errMessage);
          })

          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <Form onClick={authorizHandler}>
      <Row className="mb-1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          required
          ref={emailInputRef}
        />
        <br />
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          ref={passwordInputRef}
        />
        <br />
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          ref={confirmPasswordInputRef}
        />
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default SignUp;
