import { Badge, ListGroupItem } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const Empleado = ({fullName, title, department, pic}) => {
    return (
        <ListGroupItem className='d-flex align-items-center bg-dark text-light'>
            <EmpleadoAvatar pic={pic}></EmpleadoAvatar>
            <div className='mx-4'>
                <h5>{fullName}</h5>
                <div className='d-flex align-items-baseline'>
                    <p className='mx-2'>{title}</p>
                    <Badge bg="primary">{department}</Badge>
                </div>
            </div>

        </ListGroupItem>
    );
};

export default Empleado;