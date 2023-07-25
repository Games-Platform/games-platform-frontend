import Container from '@/components/container/Container';

import Form from '../components/form/Form';

import '@/assets/styles/_global.scss';

const Login = () => (
  <main>
    <Container>
      <h2 className="title login-title">Log in</h2>
      <Form isRegister={false}>Log In</Form>
    </Container>
  </main>
);
export default Login;
