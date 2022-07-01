import React, { useState } from "react";
import { Button, Container, Form,} from "react-bootstrap";

const RegisterForm = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "uname") {
      setValues({ ...values, userName: value });
    }

    if (name === "email") {
      setValues({ ...values, email: value });
    }
    if (name === "password") {
      setValues({ ...values, password: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (values.userName === "") {
      setError({ ...error, userName: "Name Cannot Be Blank !!" });
      setValid(false);
    } else if (values.email === "") {
      setError({ ...error, email: "Email Cannot Be Blank !!" });
      setValid(false);
    } else if (values.password === "") {
      setError({ ...error, password: "password is must!!!" });
      setValid(false);
    } else {
      setError({ ...error, userName: "" });
      setError({ ...error, Email: "" });
      setError({...error,password:""});
      setValid(true);
      
    }

    if (valid) {
      e.target.submit();
    }
   
  };
  

  return (
    <div>
      <Container className="col-6">
        <h1>Registration form</h1>
        
          <Form 
          method="post"
            onSubmit={(e) => submitHandler(e)}
            action={"google.com"}
          >
          
            <Form.Label>NAME:</Form.Label>
            <Form.Control
              type="text"
              name="uname"
              value={values.userName}
              onChange={(e) => handleChange(e)}
            ></Form.Control>
            <span className="text-danger">{error.userName}</span>
            <br />
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            ></Form.Control>
            <span className="text-danger">{error.email}</span>
            <br></br>
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            ></Form.Control>
            <span className="text-danger">{error.password}</span>

            <br />
            <Button type="submit">Submit</Button>
          
          </Form>
        
      </Container>
    </div>
  );
};

export default RegisterForm;
