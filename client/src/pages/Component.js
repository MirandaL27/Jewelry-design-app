import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ComponentFilter from '../components/ComponentFilter';
function Component() {
    return (
        <Container className='maroon-background' style={{ height: '100vh' }} fluid>
            <Row>
            <Col className = "bg-red" >
                <Row>
                    <Button data-toggle="collapse" data-target="#ComponentFilter" aria-expanded="false" aria-controls="ComponentFilter">Filter Search</Button>
                </Row>
                <Row>
                    <ComponentFilter className="collapse" id="ComponentFilter"/>
                </Row>
            </Col>
            <Col>
                <Row>
                    <div className="d-flex justify-content-center">
                        <h2>Search Components</h2>
                    </div>
                </Row>
                <Row className="ornate-border">
                    {/*images of components go here!*/}
                    Image components
                </Row>
            </Col>
            </Row>

        </Container>
    );
}

export default Component;