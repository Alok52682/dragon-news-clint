import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideber from '../Pages/Shared/LeftSideber/LeftSideber';
import RightSideber from '../Pages/Shared/RightSideber/RightSideber';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideber></LeftSideber>
                    </Col>
                    <Col lg="7">
                        <Outlet />
                    </Col>
                    <Col lg="3">
                        <RightSideber></RightSideber>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;