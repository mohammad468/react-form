import React, { useState, useEffect } from "react";
import { Form, InputGroup, Container, Col, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { notify } from "./Toast";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./Validate";
import { Link } from "react-router-dom";

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
    setErrors(validate(data, "signup"));
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
      <Container className="d-flex justify-content-center my-5">
        <Col
          className="back-sign-up px-3 py-4 rounded-3 border-dark"
          xs
          sm
          md="8"
          lg="6"
          xl="6"
          xxl="6"
        >
          <h1 className="text-primary text-center fw-bolder mb-5">Sign Up</h1>
          <Form onSubmit={submitHandler}>
            {/*// !s-name */}
            <Form.Label>Name</Form.Label>
            <InputGroup hasValidation className="">
              <InputGroup.Text>enter your name</InputGroup.Text>
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
            <Form.Label className="mt-1">Email address</Form.Label>
            <InputGroup hasValidation className="">
              <InputGroup.Text>Active email</InputGroup.Text>
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
            <Form.Label className="mt-1">Password</Form.Label>
            <InputGroup hasValidation className="">
              <InputGroup.Text>6 characters or more</InputGroup.Text>
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
            <Form.Label className="mt-1">Confirm Password</Form.Label>
            <InputGroup hasValidation className="">
              <InputGroup.Text>Re-enter password</InputGroup.Text>
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
                  label="Accept our rules"
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
            <div className="d-grid gap-2">
              <Button variant="primary" className="rounded" type="submit">
                SignUp
              </Button>
              <span className="text-center txt1 d-block my-2">or</span>
            </div>
            {/* // !e-buttons */}
          </Form>
          {/* // !start login with */}
          <div class="row justify-content-center">
            <a href="#" class="login100-social-item bg1">
              <i class="fa fa-facebook"></i>
            </a>

            <a href="#" class="login100-social-item bg2">
              <i class="fa fa-twitter"></i>
            </a>

            <a href="#" class="login100-social-item bg3">
              <i class="fa fa-google"></i>
            </a>
          </div>
          {/* // !end login with */}
          {/* // !start signUp */}
          <div class="">
            <span class="txt1 d-block mt-2 text-center">Or Login Using</span>
            <Link to="/login" class="txt2 d-block mt-2 text-center">
              Login
            </Link>
          </div>
          {/* // !end signUp */}
        </Col>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default SignUp;
