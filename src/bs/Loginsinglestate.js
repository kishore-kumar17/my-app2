import React from "react";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
const Login = () => {
  const [input, setInput] = useState({
    Username: "",
    Password: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    if (e.target.name === "Username") {
      setError({ Username: "" });
    } else if (e.target.name === "Password") {
      setError({ Password: "" });
    }
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const Validation = () => {
    const { Username, Password } = input;
    let errors = {};
    if (Username === "") {
      errors.Username = "Username is required";
    }
    if (Password === "") {
      errors.Password = "Password is required";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let errorValid = Validation();
    if (Object.keys(errorValid).length === 0) {
      console.log("success", input);
    } else {
      console.log("errorvalid", errorValid);
      setError(errorValid);
    }
  };
  return (
    <Container className="col-6">
      <div>
        <Form>
          <h1>Login Form</h1>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="kishore"
            name="Username"
            onChange={handleChange}
            value={input.Username}
          ></Form.Control>
          {error.Username && <p style={{ color: "red" }}>{error.Username}</p>}
          <br></br>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            onChange={handleChange}
            value={input.Password}
          ></Form.Control>
          <br></br>
          {error.Password && <p style={{ color: "red" }}>{error.Password}</p>}
          <div className="button">
            <Button onClick={handleSubmit}>
              submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
