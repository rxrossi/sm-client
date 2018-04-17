import React from 'react';
import { Container, Row, Col, Input, Button } from 'react-materialize';

export default ({ handleChange, handleSubmit, fields }) => (
  <Container>
    <Row>
      <Col offset="s3" s={6} className="center">
        <div style={{ maxWidth: 300, display: 'inline-block', paddingTop: '10%' }}>
          <Input 
            onChange={handleChange}
            s={12}
            name="email"
            label="Email"
            type="email"
            value={fields.email || ''}
          />
          <Input 
            onChange={handleChange}
            s={12} name="password"
            label="Password"
            type="password"
            value={fields.password || ''}
          />
          <Input
            onChange={handleChange}
            s={12}
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={fields.confirmPassword || ''}
          />
          <Button onClick={handleSubmit}>Register</Button>
        </div>
      </Col>
    </Row>
  </Container>
)
