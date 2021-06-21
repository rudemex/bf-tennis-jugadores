import React, { useState, useEffect } from 'react';
import TableJugadores from '../../components/Table/TableJugadores';
import {Button} from "react-bootstrap";
import httpClient from "../../lib/httpClient";
import JugadorModal from "../../components/Modals/JugadorModal";

let jugadorInit = {
    nombre: '',
    puntos: 0
};

const Jugador = (props) => {
    const [jugadoresList, setJugadoresList] = useState([]);
    const [jugadorData, setJugadorData] = useState(jugadorInit);
    const [openModal, setOpenModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [hasErrorInForm, setHasErrorInForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect( async () => {
        await getJugadoresList();
    },[]);

    // Services
    const getJugadoresList = async () => {
        try{
            const data = await httpClient.get('/jugadores');
            setJugadoresList(data);
        }catch (error){
            console.log(error);
        }
    }

    const agregarJugador = async () => {
        try{
            const data = await httpClient.post('/jugadores', { data:jugadorData});
            setJugadoresList([...jugadoresList, data]);
        }catch(error){
            console.log(error)
        }
        handleCloseModal();
    }

    const editarJugador = async () => {
        try{
            const data = await httpClient.put(`/jugadores/${jugadorData.id}`, {
                data: jugadorData
            });
            setJugadoresList( jugadoresList.map( jugador => ( jugador.id === data.id ? data : jugador ) ) )
        }catch(error){
            console.log(error)
        }
        handleCloseModal();
    }

    const deleteJugador = async (id) => {
        try {
            await httpClient.delete(`/jugadores/${id}`);
            setJugadoresList(jugadoresList.filter( jugador => jugador.id !== id ));
        }catch(error){
            console.log(error);
        }
    }

    // Handles
    const handleDetail = (e, data) => {
        e.preventDefault();
        props.history.push(`/jugador/${data.id}`,{data});
    }

    const handleEdit = (e, data) => {
        e.preventDefault();
        setIsEdit(true);
        handleOpenModal(e,data)
    }

    const handleDelete = async (e, data) => {
        e.preventDefault();
        if(window.confirm("Estas seguro?")){
            await deleteJugador(data.id);
        }
    }

    const handleOpenModal = (e, data = null) => {
        e.preventDefault();

        if (data !== null){

            setJugadorData(data)
        }

        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        setTimeout( () => {
            setIsEdit(false);
        }, 800 );

        setHasErrorInForm(false);
        setErrorMsg('')
        setJugadorData(jugadorInit);
    }

    const handleChangeInputForm = (property, value) => {
        //value === '' ? setHasErrorInForm(true) : setHasErrorInForm(false)
        setHasErrorInForm( value === '' ? true : false );
        setJugadorData({...jugadorData, [property]:value});

        /*if( jugadorData.nombre === '' && jugadorData.puntos >= 0 ){
            setErrorMsg("Hay campos vacios en el formulario")
        }else{
            setErrorMsg('')
        }*/
    }

    const handleSubmitForm = (e, form, isEdit) => {
        e.preventDefault();

        if (form.checkValidity()) {
            isEdit ? editarJugador() : agregarJugador()
        };

    }

    return (
        <>
            <h1>Jugador</h1>
            <div className={"mb-2"}>
                <Button variant={"success"} onClick={(event) => handleOpenModal(event) }>Agregar jugador</Button>
            </div>
            <TableJugadores
                dataForTable={jugadoresList}
                detail={handleDetail}
                edit={handleEdit}
                delete={handleDelete}
            />
            <JugadorModal
                show={openModal}
                onHide={handleCloseModal}
                isEdit={isEdit}
                jugador={jugadorData}
                handleChange={handleChangeInputForm}
                validated={hasErrorInForm}
                handleSubmit={handleSubmitForm}
                errorMsg={errorMsg}
            />
        </>
    );
}

export default Jugador;
