import React from 'react';
import { Container, Row, Col, Input, Button } from 'react-materialize';

class Login extends React.Component {
  render() {
    return (
    <Container>
        <Row className="center">
          <Col offset="s3" s={6}>
            <div style={{maxWidth: 300, display: 'inline-block'}}>
              <Input s={12} label="Email" type="email" />
              <Input s={12} label="Password" type="password" />
              <Button>Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login