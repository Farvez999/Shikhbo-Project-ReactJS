import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Leftsite from '../pages/shared/Leftsite';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <Leftsite></Leftsite>
                    </Col>
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;