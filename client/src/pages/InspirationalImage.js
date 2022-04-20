import React, {useState} from "react";
import { Container, Col, Row, Button, Collapse } from 'react-bootstrap';
import ComponentFilter from '../components/ComponentFilter';
import Auth from '../utils/auth';

function Component() {
    return (
        <Container className='maroon-background' style={{ minHeight: '100vh' }} fluid>
                <Row fluid>
                    <div className="text-center" style={{width: '100%'}}>
                        <h2>Inspirational Images</h2>
                    </div>  
                </Row>
                {Auth.loggedIn() && <Row fluid>
                    <div className = "d-flex justify-content-end m-5" style={{width: '100%'}}>
                    <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active">Add Image</Button>
                    </div>
                </Row>}
                <Row className="bg-red" fluid>
                    <ComponentFilter className="collapse" id="ComponentFilter"/>
                </Row>
                <Row className="ornate-border m-3">
                    {/*images go here!*/}
                    Inspirational Images
                </Row>

        </Container>
    );
}

export default Component;