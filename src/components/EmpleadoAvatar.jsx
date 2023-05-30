import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({pic}) => {

    const imageStyle = {
        borderRadius: "100%",
        width: "75px",
        height: "75px",
    }

    return (
        <Image style={imageStyle} src={pic}>

        </Image>
    );
};

export default EmpleadoAvatar;