import Container from '../components/container/Container';
import Form from '../components/form/Form';

import '@/assets/styles/_global.scss';

const Register = () => (
  <main>
    <Container>
      <h2 className="title login-title">Register</h2>
      <Form isRegister>Continue</Form>
    </Container>
  </main>
);
export default Register;
