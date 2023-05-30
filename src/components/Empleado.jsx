import { Badge, ListGroupItem } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const Empleado = () => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <EmpleadoAvatar></EmpleadoAvatar>
            <div className='mx-4'>
                <h5>Nombre genérico</h5>
                <div className='d-flex align-items-baseline'>
                    <p>Puesto de trabajo</p>
                    <Badge bg="primary">Lugar</Badge>
                </div>
            </div>

        </ListGroupItem>
    );
};

export default Empleado;