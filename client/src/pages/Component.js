import React, {useState} from "react";
import { Container, Col, Row, Button, Collapse } from 'react-bootstrap';
import ComponentFilter from '../components/ComponentFilter';
function Component() {


    return (
        <Container className='maroon-background' style={{ minHeight: '100vh' }} fluid>
                <Row fluid>
                    <div className="text-center" style={{width: '100%'}}>
                        <h2>Search Components</h2>
                    </div>  
                </Row>
                <Row className="bg-red" fluid>
                    <ComponentFilter className="collapse" id="ComponentFilter"/>
                </Row>
                <Row className="ornate-border m-3">
                    {/*images of components go here!*/}
                    Image components
                </Row>

        </Container>
    );
}

export default Component;