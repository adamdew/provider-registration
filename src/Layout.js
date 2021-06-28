
import { Container} from 'reactstrap';
import RegisterForm from './RegisterForm';

function Layout() {
  return (
    
    <Container className="form-wrap" fluid="sm">
        <RegisterForm></RegisterForm>
    </Container>

  );
}

export default Layout;
