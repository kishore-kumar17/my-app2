import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginNewForm = () => {
  const [input, setinput] = useState({});
  const [error, setError] = useState({});
  const [value, setvalue] = useState({});
  useEffect(() => {
    const valuess = JSON.parse(localStorage.getItem("input"));
    if (valuess) {
      setvalue(valuess);
    }
  }, []);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    if (!e.target.value) {
      setError({
        ...error,
        [e.target.name]: `${e.target.name} IS MUST  `,
      });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
  };

  const submithandler = (e) => {
    e.preventDefault();
    let valid = false;
    if (!input.username) {
      setError({ ...error, username: "note:***Name cannot be blank***" });
    } else if (!input.password) {
      setError({ ...error, password: " note:***Password cannot be blank***" });
    } else if (
      value.username != input.username &&
      value.password != input.password
    ) {
      alert("Invalid");
    } else if (
      value.username == input.username &&
      value.password == input.password
    ) {
      navigate("/Home");
    }
  };

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <Container className="col-4">
        <Form onSubmit={submithandler}>
          <div>
            <Form.Label>USER NAME</Form.Label>
          </div>
          <div>
            <Form.Control
              type="text"
              name="username"
              onChange={handlechange}
            ></Form.Control>
            <h5 style={{ color: !error ? "red" : "darkcyan" }}>
              {error.username}
            </h5>
          </div>
          <br></br>
          <br></br>
          <div>
            <Form.Label>PASSWORD</Form.Label>
          </div>
          <div>
            <Form.Control
              type="password"
              name="password"
              onChange={handlechange}
            ></Form.Control>
            <h4 style={{ color: "red" }}>{error.password}</h4>
          </div>
          <br></br>
          <br></br>
          <div>
            <Button variant="outline-success" size="lg" type="submit">
              SIGN IN
            </Button>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <h4>
            DON't HAVE AN ACCOUNT ?<Link to="/">REGISTER</Link>
          </h4>
        </Form>
      </Container>

    </div>
  );
};

export default LoginNewForm;
