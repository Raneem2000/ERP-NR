import React from "react";
import "../auth.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="vh-100 hh">
      <Row className="h-100 align-items-center justify-content-center">
        <Col sm="6">
          <div className="d-flex flex-row pt-5 justify-content-center align-items-center">
            <img
              src="./logo.png"
              className=" px-3"
              style={{ width: "15%", height: "15%" }}
            />

            <h1 className=" fw-bold mb-0 "> ERP</h1>
          </div>

          <div className="d-flex flex-column  w-75 pt-4">
            <h3 className="fw-bold mb-3 ps-5 pb-3">Log in</h3>

            <Form className="mb-4 mx-5 w-100">
              <Form.Group className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" size="lg" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" size="lg" />
              </Form.Group>

              <Button
                className="login-button mb-4 px-5 w-100"
                variant="info"
                size="lg"
              >
                Login
              </Button>
            </Form>

            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5 ">
              Don't have an account?{" "}
              <a href="#!" className="link-info">
                Register here
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
