import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';




const LogIn = () => {


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm();
    //   const onSubmit = (data) =>{
    //       loginWithEmailPass(data.email, data.password).then((user) => {
    //         console.log(user);
    //         history.push("/home");
    //       });
    const { signInUsingGoogle, loginWithEmailPass } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/services";

    const handleGoogleLogin = () => {
      signInUsingGoogle().then((result) => {
        history.push(redirect_uri);
      });
    };
      
           

    
    return (
      <div className="container my-5">
        <h4>Sign-In With Email-Password</h4>
        <div className="container my-5">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            //   onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log-In
            </Button>
          </Form>
          <br />
          <h3>Or</h3>
          <button onClick={handleGoogleLogin} className="btn btn-primary">
            Sign-In With Google
          </button>
        </div>
      </div>
    );
};

export default LogIn;