import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Menu from "../Menu/Menu";

const Wrapper = (props) => {
    const {children} = props;

    return (
        <div className={"wrapper"}>
            <Menu/>
            <Container>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Wrapper;
