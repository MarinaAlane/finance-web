import { useState } from 'react';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const sendInformations = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, senha }), // Envia os dados corretos
      });

      if (response.ok) {
        console.log('Usuário criado com sucesso!');
        // Faça algo após o sucesso, como redirecionar o usuário
      } else {
        console.error('Erro ao criar usuário:', response.status);
        // Lidar com o erro, exibir mensagem para o usuário, etc.
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Lidar com o erro de rede
    }
  };

  return (
    <Container>
      <h1>FORMULÁRIO</h1>
      <Row>
        <Col md={5}>
          <Form.Label htmlFor="inputName">Nome:</Form.Label>
          <Form.Control type="text" placeholder="Maria Silva" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Label htmlFor="inputEmail">Email:</Form.Label>
          <Form.Control type="email" placeholder="maria.silva@teste.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button variant="primary" onClick={sendInformations}>Cadastrar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
