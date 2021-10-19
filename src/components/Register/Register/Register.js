import React from 'react';
import { Button , Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { regWithEmailPass } = useAuth();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const history=useHistory();

    const onSubmit = (data) => {
        regWithEmailPass(data.email, data.password).then((user) => {
          console.log(user);
          history.push("/login")
        });
    };

    return (
      <div>
        <div className="container my-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <h3>Or</h3>
          <button className="btn btn-primary">Sign-Up With Google</button>
        </div>
      </div>
    );
};

export default Register;