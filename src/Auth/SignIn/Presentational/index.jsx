import React from 'react';
import { Container, Row, Col, Input, Button } from 'react-materialize';

class Login extends React.Component {
  render() {
    const { fields, handleChange, handleSubmit } = this.props;
    return (
    <Container>
        <Row className="center">
          <Col offset="s3" s={6}>
            <div style={{maxWidth: 300, display: 'inline-block', paddingTop: '10%'}}>
              <Input 
                onChange={handleChange} 
                s={12} name="email" 
                label="Email" 
                type="email" 
                value={fields.email || ''} 
              />
              <Input
                onChange={handleChange}
                s={12}
                name="password"
                label="Password"
                type="password" 
                value={fields.password || ''} 
               />
              <Button onClick={handleSubmit}>Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login
