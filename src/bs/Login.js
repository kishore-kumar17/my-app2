import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    email: "",
    password:""
  });
  const [error, setError] = useState({});

  const Change = (e) => {
    if (e.target.name === "username") {
      setError({ username: "" });
    } 
     else if (e.atrget.email === "email") {
      setError({ mail: "" });
     }
    else if (e.target.name === "password") {
        setError({ password: "" });
    }
    setInput({ ...Input, [e.target.name]: e.target.value });
  };
  const Validation = () => {
    const { Username,email,Password } = Input;
    let errors = {};
    if (Username === "") {
      errors.username = "Username is required";
    }
    if (email === "") {
      errors.email = "email is required";
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
 
  };
  return (
    <div className="body">
      <h1>LOGIN FORM</h1>
      <Container className="contain col-5">
        <Form>
          <Form.Label>USER NAME:</Form.Label>
          <Form.Control
            type="text"
            placeholder="kishore"
            name="username"
            onChange={Change}
            value={Input.username}
          ></Form.Control>
          {error.username && <p style={{ color: "red" }}>{error.Username}</p>}

          <br></br>
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={Change}
            value={Input.email}
          ></Form.Control>
          {error.email && <p style= {{ color:"red"}}>{error.email}</p>}
          <br></br>

          <Form.Label>PASSWORD:</Form.Label>
          <Form.Control
            type="password"
            placeholder="0987654321"
            name="password"
            onChange={Change}
            value={Input.password}
          ></Form.Control>
          <br></br>
          {error.password && <p className="warning">{error.password}</p>}

          <Button variant="success" type="submit" onClick={handleSubmit}>
            SUBMIT
          </Button>
          {""}
          <Button variant="danger" type="reset">
            RESET
          </Button>
          {""}

          <Button variant="outline-info">forgot password</Button>
        </Form>
      </Container>
      <p>
        {" "}
        ******note:{" "}
        <b>
          {" "}
          you KNOW YOUR USER NAME ,EMAIL,PASSWORD IS SHOW IN THE placeholder
        </b>
        ******
      </p>
    </div>
  );
};

export default Login;
