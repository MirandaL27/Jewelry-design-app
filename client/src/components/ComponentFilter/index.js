import React, { useState } from "react";
import { Card, Collapse, Button, Dropdown, Row, Col } from 'react-bootstrap';
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
                            <Row>
                                <label htmlFor="componentName">Component name: </label>
                                <input id="componentName"
                                    type="text"
                                    placeholder="Component name"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Component Type: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Style: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Material: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Stone Type: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Country Of Origin: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentType-dd">Shape: </label>
                                <Dropdown id="componentType-dd">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentSize">Component Size: </label>
                                <input id="componentSize"
                                    type="text"
                                    placeholder="Component Size"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentWeight">Component Weight: </label>
                                <input id="componentWeight"
                                    type="text"
                                    placeholder="Component Weight"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentPrice">Component Price: </label>
                                <input id="componentPrice"
                                    type="Decimal"
                                    placeholder="00.00"
                                />
                            </Row>

                            

                            <Row>
                                <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active">Clear</Button>
                                <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active">Search</Button>
                            </Row>

                        </Card>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default ComponentFilter;