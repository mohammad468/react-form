import React, { useState, useEffect } from "react";
import { Form, InputGroup, Container, Col, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { notify } from "./Toast";
import "react-toastify/dist/ReactToastify.css";
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
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data, touched]);

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

  // * start focus handler....

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  // * end focus handler....

  // * start submit handler....

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You signed in successfully", "success");
    } else {
      notify("invalid Data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  // * end submit handler....

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
          <Form onSubmit={submitHandler}>
            {/*// !s-name */}
            <InputGroup hasValidation className="mt-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <Form.Control
                type="text"
                name="name"
                value={data.name}
                onChange={changeHandler}
                // TODO:className={errors.name ? "is-invalid" : "is-valid"}
                isValid={!errors.name && touched.name}
                isInvalid={errors.name && touched.name}
                onFocus={focusHandler}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
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
                onChange={changeHandler}
                // TODO:className={errors.email ? "is-invalid" : "is-valid"}
                isValid={!errors.email && touched.email}
                isInvalid={errors.email && touched.email}
                onFocus={focusHandler}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
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
                onChange={changeHandler}
                // TODO:className={errors.password ? "is-invalid" : "is-valid"}
                isValid={!errors.password && touched.password}
                isInvalid={errors.password && touched.password}
                onFocus={focusHandler}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
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
                onChange={changeHandler}
                // TODO:className={errors.confirmPassword ? "is-invalid" : "is-valid"}
                isValid={!errors.confirmPassword && touched.confirmPassword}
                isInvalid={errors.confirmPassword && touched.confirmPassword}
                onFocus={focusHandler}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
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
                  isInvalid={errors.isAccepted && touched.isAccepted}
                  isValid={!errors.isAccepted && touched.isAccepted}
                  onFocus={focusHandler}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={
                    errors.isAccepted && touched.isAccepted ? "d-block" : ""
                  }
                >
                  {errors.isAccepted && touched.isAccepted
                    ? "please check"
                    : "its OK!"}
                </Form.Control.Feedback>
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
        <ToastContainer />
      </Container>
    </div>
  );
};

export default SignUp;
