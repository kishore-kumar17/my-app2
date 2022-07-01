import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Newform.css";

const NewForm = () => {
  const [input, setInput] = useState({});

  const [error, setError] = useState({});

  const navi = useNavigate();

  const Change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    if (!e.target.value) {
      setError({
        ...error,
        [e.target.name]: `${e.target.name} can't be blank`,
      });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
  };

  const handlechange = (e) => {
    e.preventDefault();
    if (!input.username) {
      setError({ username: "NAME is must" });
    } else if (!input.password) {
      setError({ password: "PASSWORD is must" });
    } else if (input.password.length < 8) {
      setError({ password: "PASSWORD must be 8 charecters" });
    } else if (!input.confirmpassword) {
      setError({ confirmpassword: "CONFIRM PASSWORD is must" });
    } else if (input.confirmpassword.length < 8) {
      setError({ confirmpassword: "CONFIRM PASSWORD must be 8 charecters" });
    } else if (input.confirmpassword != input.password) {
      setError({ confirmpassword: "password must be same.." });
    } else if (!input.mobilenumber) {
      setError({ mobilenumber: "MOBILE NUMBER is must" });
    } else if (input.mobilenumber.length != 10) {
      setError({ mobilenumber: "MOBILE NUMBER MUST BE 10 DIGITS" });
    } else if (!input.robot) {
      setError({ robot: "click me" });
    } else {
      localStorage.setItem("input", JSON.stringify(input));
      navi("/login");
    }
  };

  return (
    <div>
      <h1 id="head">Registration form</h1>
      <Container className="col-lg-4">
        <Form onSubmit={handlechange}>
          <Form.Label>USER NAME</Form.Label>
          <Form.Control
            name="username"
            type="text"
            onChange={Change}
          ></Form.Control>
          <h5 style={{ color: "darkred" }}>{error.username}</h5>
          <br></br>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={Change}
          ></Form.Control>
          <h5 style={{ color: "red" }}>{error.password}</h5>
          <br></br>
          <Form.Label> CONFIRM PASSWORD</Form.Label>
          <Form.Control
            name="confirmpassword"
            type="password"
            onChange={Change}
          ></Form.Control>
          <h4 style={{ color: "red" }}>{error.confirmpassword}</h4>
          <br></br>
          <Form.Label>MOBILE NUMBER</Form.Label>
          <Form.Control
            name="mobilenumber"
            type="number"
            onChange={Change}
          ></Form.Control>
          <br></br>
          <h4 style={{ color: "red" }}>{error.mobilenumber}</h4>
          <br></br>
          <Form.Label>
            I'M not a<Form.Check name="robot" onChange={Change}></Form.Check>
          </Form.Label>
          <h4 style={{ color: "red" }}>{error.robot}</h4>
          <br></br>
          <br></br>
          <Button variant="success" type="submit">
            SUBMIT
          </Button>
          <Button variant="danger" type="reset">
            RESET
          </Button>
          <br></br>
          <br></br>
          <br></br>

          <Link to="/login">LOGIN HERE</Link>
        </Form>
      </Container>
    </div>
  );
};

export default NewForm;
