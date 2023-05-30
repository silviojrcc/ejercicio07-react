import { Image } from "react-bootstrap";

const EmpleadoAvatar = () => {

    const imageStyle = {
        borderRadius: "100%",
        width: "75px",
        height: "75px",
    }

    return (
        <Image style={imageStyle} src="https://origamimag.com/wp-content/uploads/2020/05/pikachu11-2.jpg">

        </Image>
    );
};

export default EmpleadoAvatar;