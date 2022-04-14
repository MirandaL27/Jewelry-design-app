import React from "react";
import { Container, Col, Row } from 'react-bootstrap';


function Homepage() {
    return (
        <Container className='bg-image' style={{ height: '100vh' }} fluid>
            <Col className='bg-overlay' style={{ width: '100%', height: '100%' }}>
                <Row className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <h2>Welcome</h2>
                </Row>
                <Row className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <h4>This app is intedned to help you create impeccable jewelry designs. </h4>
                </Row>
                <Row className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <Row style={{ width: '60%' }}>
                        <Col className="m-5 p-5">
                            <h3>Getting Started: </h3>
                            <p>Click on the settings link to configure dropdown options</p>
                            <p>(including, but not limited to): </p>
                            <ul>
                                <li>Color</li>
                                <li>Material (e.g. gold, silver, copper etc.)</li>
                                <li>Style (e.g. victorian, gothic, boho etc.)</li>
                                <li>Stone (e.g. amethyst, topaz, diamond, etc.)</li>
                                <li>Component Type (e.g. bead, bead cap, connector, charm etc.)</li>
                                <li>Jewelry Type (e.g. bracelet, necklace etc.)</li>
                            </ul>
                        </Col>

                        <Col className="m-5 p-5">
                            <h3>Usage: </h3>
                            <p>Click the components link to add jewelry components.</p>
                            <p>Click the images link to add inspirational images.</p>
                            <p>Click the designs link to combine jewelry components into a design.</p>
                            <p>Click the collage link to create image collages from your inspirational images.</p>
                        </Col>
                    </Row>


                </Row>
            </Col>
        </Container>
    )
}

export default Homepage;