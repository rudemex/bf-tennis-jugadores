import React from 'react';
import {Col, Form} from "react-bootstrap";

const FormRowInput = ({label, property, type, placeholder, required, value, handleChange}) => {
    return (
        <Form.Group controlId={property}>
            <Form.Row>
                <Col className="col-md-3">
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col className="col-md-9">
                    <Form.Control
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={ (e) => handleChange(property, e.target.value) }
                    />

                    {required && (
                        <Form.Control.Feedback type={"invalid"}>
                            {label} es requerido
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Row>
        </Form.Group>
    );
}

export default FormRowInput;
