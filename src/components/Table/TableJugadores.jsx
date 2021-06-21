import React from 'react';
import {Table, Button} from "react-bootstrap";

const TableBody = (data) => {
    return data.dataForTable.map( (jugador) => (
        <tr key={`tr-${jugador.id}`}>
            <td>{jugador.id}</td>
            <td>{jugador.nombre}</td>
            <td>{jugador.puntos}</td>
            <td>
                <Button variant={"info"} onClick={ (event) => data.detail(event, jugador) }>Info</Button>{' '}
                <Button variant={"primary"} onClick={ (event) => data.edit(event, jugador) }>Editar</Button>{' '}
                <Button variant={"danger"} onClick={ (event) => data.delete(event, jugador) }>Eliminar</Button>
            </td>
        </tr>
    ));
}

const TableJugadores = (props) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Jugador</th>
                        <th>Puntos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {TableBody(props)}
                </tbody>
            </Table>
        </>
    )

}
export default TableJugadores;
