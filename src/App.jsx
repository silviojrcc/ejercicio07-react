import { Container } from 'react-bootstrap';
import './App.css'
import EmpleadoList from './components/EmpleadoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Container className='d-flex justify-content-center'>
      <div className='main my-5'>
        <EmpleadoList></EmpleadoList>
      </div>
    </Container>
  )
}

export default App;
