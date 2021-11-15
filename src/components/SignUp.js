import React, { useState, useEffect } from "react";
import { Form, InputGroup, Container, Col, Button } from "react-bootstrap";
import { validate } from "./Validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);

  // * start change handler....

  const changeHandler = (event) => {
    // !console.log(event.target.checked); for checkbox
    // !console.log(event.target.value); for inputs texts...
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  // * end change handler....

  return (
    <div>
      <Container className="d-flex justify-content-center mt-5">
        <Col
          className="back-sign-up px-3 py-4 rounded-3 border-dark"
          xs
          sm
          md="8"
          lg="6"
          xl="6"
          xxl="6"
        >
          <Form>
            {/*// !s-name */}
            <InputGroup hasValidation className="mt-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <Form.Control
                type="text"
                name="name"
                value={data.name}
                required
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
            {/* // !e-name */}
            {/* // !s-Email */}
            <InputGroup hasValidation className="my-3">
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                required
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
            {/* // !e-Email */}
            {/* // !s-password */}
            <InputGroup hasValidation className="my-3">
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                type="password"
                name="password"
                value={data.password}
                required
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
            {/* // !e-password */}
            {/* // !s-confirmPassword */}
            <InputGroup hasValidation className="my-3">
              <InputGroup.Text>Confirm Password</InputGroup.Text>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                required
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
            {/* // !e-confirmPassword */}
            {/* // !s-checkbox */}
            <InputGroup hasValidation className="my-3">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  name="isAccepted"
                  value={data.isAccepted}
                  label="Check me out"
                  onChange={changeHandler}
                />
              </Form.Group>
            </InputGroup>
            {/* // !e-checkbox */}
            {/* // !s-buttons */}
            <InputGroup hasValidation className="d-flex justify-content-around">
              <Button variant="outline-primary">Login</Button>
              <Button variant="primary" className="rounded" type="submit">
                SignUp
              </Button>
            </InputGroup>
            {/* // !e-buttons */}
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default SignUp;
