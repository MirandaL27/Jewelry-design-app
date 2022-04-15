import React from "react";
import { Container, Col, Row } from 'react-bootstrap';


function Homepage() {
    return (
        <Container className='bg-image' style={{ height: '100vh' }} fluid>
            <Col className='bg-overlay' style={{ width: '100%', height: '100%' }}>
                <Row className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <h2 className="maroon-background pt-2 pb-2 pl-2 pr-5 rounded">Welcome</h2>
                </Row>
                <Row className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <Row style={{ width: '80%' }}>
                        <Col className="m-3 p-5 ornate-border">
                            <div className="maroon-background p-2 rounded">
                            <h4>Getting Started: </h4>
                            <ul className = "small list-style">
                                <li className="small">Click the login/signup link to make an account or sign in.</li>
                                <li className = "small">Click on the settings link to configure dropdown options (including, but not limited to):</li>
                                <li className = 'small'>Click on the help link for more detailed instructions.</li>
                            </ul>
                            </div>
                        </Col>

                        <Col className="m-3 p-5 ornate-border">
                            <div className="maroon-background p-2 rounded">
                            <h4>Usage: </h4>
                            <ul className = "small list-style">
                                <li>Click the components link to add jewelry components.</li>
                                <li>Click the images link to add inspirational images.</li>
                                <li>Click the designs link to combine jewelry components into a design.</li>
                                <li>Click the collage link to create image collages from your inspirational images.</li>
                            </ul>
                            </div>
                            
                        </Col>
                    </Row>


                </Row>
            </Col>
        </Container>
    )
}

export default Homepage;