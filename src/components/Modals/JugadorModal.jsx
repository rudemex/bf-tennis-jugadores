import React, {useRef} from "react";
import {Button, Modal, Form, Col} from "react-bootstrap";
import FormRowInput from "../FormRow/FormRowInput";

const JugadorModal = ({
  show,
  onHide,
  isEdit,
  validated,
  jugador,
  handleChange,
  handleSubmit,
  errorMsg,
}) => {
    const formRef = useRef(null);

    return(
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
                backdrop={"static"}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{ isEdit ? 'Editar' : 'Agregar' } Jugador</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className={"form"} noValidate validated={validated} ref={formRef}>
                        <FormRowInput
                            label={"Nombre"}
                            property={'nombre'}
                            type={"text"}
                            placeholder={"Ej: Juan Perez"}
                            required={true}
                            value={jugador.nombre}
                            handleChange={handleChange}
                        />
                        <FormRowInput
                            label={"Puntos"}
                            property={"puntos"}
                            type={"number"}
                            placeholder={"Ej: 100"}
                            required={true}
                            value={jugador.puntos}
                            handleChange={handleChange}
                        />

                        {
                            errorMsg !== '' &&(
                                <Form.Group className="alert-danger">
                                    {errorMsg}
                                </Form.Group>
                            )
                        }

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={onHide} variant="danger">Cancelar</Button>
                    <Button onClick={ e => handleSubmit(e, formRef.current, isEdit) } variant="success">{ isEdit ? 'Editar':'Agregar' }</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default JugadorModal;
