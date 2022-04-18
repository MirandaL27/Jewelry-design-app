import React, { useState } from "react";
import { Card, Collapse, Button, Dropdown, Row, Col, InputGroup, FormControl, Form, FormCheck } from 'react-bootstrap';
import DropDownItem from '../DropDownItem';

function ComponentFilter() {
    const [open, setOpen] = useState(false);

    return (

        <div className="p-3 m-3 text-center" style={{ width: '100%' }}>
            <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active" onClick={() => setOpen(!open)}
                aria-controls="filterDiv"
                aria-expanded={open}>{open ? 'Collapse Filter' : 'Expand Filter'}
            </Button>
            <div>
                <Collapse in={open} >
                    <div className="bg-red gold-font text-center rounded" id="filterDiv">
                        <Card body className="bg-red" style={{ width: '100%' }}>
                            <Form>
                                <Row style={{ textAlign: 'left' }}>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Type: </Form.Label>
                                            <Dropdown id="componentType-dd">
                                                <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ width: '100%', textAlign: 'left', height: '51.5px'}} className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active">
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Style: </Form.Label>
                                            <Dropdown id="componentStyle-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Shape: </Form.Label>
                                            <Dropdown id="componentShape-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Material: </Form.Label>
                                            <Dropdown id="componentMaterialType-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Stone Type: </Form.Label>
                                            <Dropdown id="componentStoneType-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Country Of Origin: </Form.Label>
                                            <Dropdown id="componentCountry-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Name: </Form.Label>
                                            <Form.Control type="text"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="Component Name"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Size: </Form.Label>
                                            <Form.Control id="componentSize"
                                                type="text"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="Component Size"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Weight: </Form.Label>
                                            <Form.Control id="componentWeight"
                                                type="text"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="Component Weight"
                                            />
                                        </Form.Group>

                                        <Form.Label className="small" style={{ display: 'block' }}>Component Price: </Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="dollar-addon0" className="small dark-gold-background">$</InputGroup.Text>
                                            <Form.Control type="Number" step={0.01}
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="0.00"
                                                aria-describedby="dollar-addon0" />
                                        </InputGroup>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Quantity: </Form.Label>
                                            <Form.Control type="Number" step={1}
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="0"
                                            />
                                        </Form.Group>

                                        <Form.Label className="small">Component Max Price: </Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="dollar-addon" className="small dark-gold-background">$</InputGroup.Text>
                                            <Form.Control type="Number" step={0.01}
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="0.00"
                                                aria-describedby="dollar-addon" />
                                        </InputGroup>
                                    </Col>

                                    <Col>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Color: </Form.Label>
                                            <Dropdown id="componentColor-dd">
                                                <Dropdown.Toggle style={{ width: '100%', textAlign: 'left', height: '51.5px' }} className='small gold-background maroon-font red-shadow-hover transition no-border red-bg-active'>
                                                    {'placeholder'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="small gold-background maroon-font" style={{ width: '100%' }}>
                                                    <DropDownItem option={'item1'} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="small">Component Max Quantity: </Form.Label>
                                            <Form.Control type="Number" step={1}
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="0"
                                            />
                                        </Form.Group>

                                        <Form.Label className="small">Component Shipping Price: </Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="dollar-addon2" className="small dark-gold-background">$</InputGroup.Text>
                                            <Form.Control type="Number" step={0.01}
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="0.00"
                                                aria-describedby="dollar-addon2" />
                                        </InputGroup>

                                        <Form.Group>
                                            <Form.Label className="small">Component Shipping Time : </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                placeholder="Component Shipping Time"
                                            />
                                        </Form.Group>


                                        <Form.Group>
                                            <Form.Label className="small">Component Link : </Form.Label>
                                            <Form.Control id="componentLink"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                type="text"
                                                placeholder="Component Link"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="small">Component Photo Link : </Form.Label>
                                            <Form.Control id="componentPhotoLink"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                type="text"
                                                placeholder="Component Photo Link"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                        <Form.Group>
                                            <Form.Label className="small">Component Etsy Item Name: </Form.Label>
                                            <Form.Control id="componentEtsyName"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                type="text"
                                                placeholder="Component Etsy Item Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="small">Component Shop Name : </Form.Label>
                                            <Form.Control id="componentShopName"
                                                className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"
                                                type="text"
                                                placeholder="Component Shop Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="small" >Free Shipping? : </Form.Label>
                                            <Form.Check id="componentFreeShipping" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="small">Sold Out? : </Form.Label>
                                            <Form.Check id="componentSoldOut"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="small">Best Seller? : </Form.Label>
                                            <Form.Check id="componentBestSeller"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="small">Like Rating: </Form.Label>
                                            <Form.Check id="componentLikeRating"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row fluid style={{ justifyContent: 'center' }}>
                                    <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active m-3">Clear</Button>
                                    <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active m-3">Search</Button>
                                </Row>
                            </Form>
                        </Card>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default ComponentFilter;