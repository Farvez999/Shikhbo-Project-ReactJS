import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Leftsite from '../pages/shared/Leftsite';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row lg="2">
                    <Leftsite></Leftsite>
                </Row>
                <Row lg="10">
                    <Outlet></Outlet>
                </Row>
            </Container>
        </div>
    );
};

export default Main;