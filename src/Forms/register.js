import { useState } from 'react';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';

function RegisterForm() {
  const [user, setUser] = useState(false);

  const sendInformations = () => {
    setUser(true)
    console.log('FOOI')
  }
  return (
    <Container>
      <h1>FORMULÁRIO</h1>
      <Row>
        <Col md={5}>
          <Form.Label htmlFor="inputName">Nome:</Form.Label>
          <Form.Control type="text" placeholder="Maria Silva" />
          <Form.Label htmlFor="inputName">Nome:</Form.Label>
          <Form.Control type="email" placeholder="maria.silva@teste.com" />
          <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Button variant="primary" onClick={() => sendInformations()}>Cadastrar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;