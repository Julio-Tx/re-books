import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Container,
  FakeLink,
  Form,
  Divider,
  DividerText,
  ButtonRegister,
  Button,
  Fix,
} from './styled';
import AzamonLogo from '../../images/azamon-logo-black.png';
import { auth, logInWithEmailAndPassword } from '../../DB/firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [user, loading] = useAuthState(auth);

  const setSent = () => {
    setEmailSent(true);
  };

  const logIn = () => {
    logInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);

  return (
    <Fix>
      <Container>
        <Link to="/">
          <img src={AzamonLogo} alt="Azamon logo" />
        </Link>
        <Form>
          <p className="title">Iniciar sessão</p>
          {emailSent === false ? (
            <form onSubmit={setSent}>
              <label htmlFor="name">
                E-mail
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type="submit">
                Continuar
              </button>
            </form>
          ) : (
            <div>
              <label htmlFor="name">
                Palavra-passe
                <input
                  autoFocus
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <Button type="button" onClick={logIn}>Iniciar sessão</Button>
            </div>
          )}
          <p className="privacy">
            Ao criar uma conta, aceita as
            <FakeLink>Condições de Uso</FakeLink>
            e o
            <FakeLink>Aviso de Privacidade</FakeLink>
            da Amazon.
          </p>
        </Form>
        <Divider />
        <DividerText>É a sua primeira vez na Azamon?</DividerText>
        <Link to="/register">
          <ButtonRegister type="button">Criar a conta da Azamon</ButtonRegister>
        </Link>
      </Container>
    </Fix>
  );
}

export default Login;
