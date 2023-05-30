import { ListGroup } from "react-bootstrap";
import Empleado from "./Empleado";

const EmpleadoList = () => {

    const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://origamimag.com/wp-content/uploads/2020/05/pikachu11-2.jpg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://i.pinimg.com/originals/e8/5c/8a/e85c8a67cd7acb6a7a7284090e45fcb4.jpg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://www.smogon.com/forums/attachments/dcittr3vqaa4iej-jpg.129553/" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://www.smogon.com/forums/attachments/photomanip-jynx-rosa-jpg.129551/" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3e8c497-6bd4-4b88-9d1a-402481aa9c5b/dahn7sa-91eed438-0bb9-4778-a6eb-abaee82cdcc4.png/v1/fill/w_894,h_894/bulbasaur_by_badlydrawnpokemon_dahn7sa-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2UzZThjNDk3LTZiZDQtNGI4OC05ZDFhLTQwMjQ4MWFhOWM1YlwvZGFobjdzYS05MWVlZDQzOC0wYmI5LTQ3NzgtYTZlYi1hYmFlZTgyY2RjYzQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mv4LUGKPjz6ZGVHSGsUE1JWaX77Z4UpMuSqKTLqHeq8" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://pbs.twimg.com/media/Egn_Ff5XcAQ-xJQ.jpg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://preview.redd.it/vy97gzoxq1z51.jpg?auto=webp&s=a035f485c5193c8ecfb6e6efa01e05d796acae7f" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://external-preview.redd.it/6ICPyDCBfTGZ4Of0NiOM5tSOLSzGZ16nTvGMQsBO0Q0.png?auto=webp&s=76ea163bea6e5a46dfe93ac7b5f930944fd09eaf" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://i.etsystatic.com/iusa/67ce59/78389411/iusa_fullxfull.78389411_ip05.jpg?version=0" },
    ];

    return (
        <ListGroup>
            {empleados.map((empleado) => (
                <Empleado key={empleado.id} fullName={empleado.fullName} title={empleado.title} department={empleado.department} pic={empleado.pic}></Empleado>
            ))}
        </ListGroup>
    );
};

export default EmpleadoList;