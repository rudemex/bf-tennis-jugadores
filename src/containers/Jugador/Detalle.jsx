import React from "react";
import Button from 'react-bootstrap/Button';


const Detalle = (props) => {
    const {
        history,
        match: {
            params: {
                id
            }
        },
        location: {
            state: {
                data
            }
        }
    } = props;

    return (
        <>
            <Button onClick={()=> history.goBack()} variant="link"> {`<`} Volver</Button>
            <h1>Jugador: {id}</h1>
            <p>{data.nombre} - {data.puntos}</p>
        </>
    )
}

export default Detalle;
