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
                                <label htmlFor="componentStyle-dd">Style: </label>
                                <Dropdown id="componentStyle-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentMaterialType-dd">Material: </label>
                                <Dropdown id="componentMaterialType-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentStoneType-dd">Stone Type: </label>
                                <Dropdown id="componentStoneType-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentCountry-dd">Country Of Origin: </label>
                                <Dropdown id="componentCountry-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>

                            <Row>
                                <label htmlFor="componentShape-dd">Shape: </label>
                                <Dropdown id="componentShape-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
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
                                <label htmlFor="componentQuantity">Component Quantity: </label>
                                <input id="componentQuantity"
                                    type="Number"
                                    placeholder="0"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentMaxPrice">Component Max Price: </label>
                                <input id="componentMaxPrice"
                                    type="Decimal"
                                    placeholder="00.00"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentMaxQuantity">Component Max  Quantity: </label>
                                <input id="componentMaxQuantity"
                                    type="Number"
                                    placeholder="0"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentFreeShipping">Free Shipping? : </label>
                                <input id="componentFreeShipping"
                                    type="Checkbox"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentShippingPrice">Component Shipping Price: </label>
                                <input id="componentShippingPrice"
                                    type="Decimal"
                                    placeholder="00.00"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentShippingTime">Component Shipping Time : </label>
                                <input id="componentShippingTime"
                                    type="text"
                                    placeholder="Component Shipping Time"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentColor-dd">Color: </label>
                                <Dropdown id="componentColor-dd">
                                    <Dropdown.Toggle className='"small gold-background maroon-font red-shadow-hover transition no-border red-bg-active"'>
                                        { }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="small gold-background maroon-font">
                                        <DropDownItem option={'item1'} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>                            

                            <Row>
                                <label htmlFor="componentLink">Component Link : </label>
                                <input id="componentLink"
                                    type="text"
                                    placeholder="Component Link"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentPhotoLink">Component Photo Link : </label>
                                <input id="componentPhotoLink"
                                    type="text"
                                    placeholder="Component Photo Link"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentEtsyName">Component Etsy Item Name: </label>
                                <input id="componentEtsyName"
                                    type="text"
                                    placeholder="Component Etsy Item Name"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentShopName">Component Shop Name : </label>
                                <input id="componentShopName"
                                    type="text"
                                    placeholder="Component Shop Name"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentSoldOut">Sold Out? : </label>
                                <input id="componentSoldOut"
                                    type="Checkbox"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentBestSeller">Best Seller? : </label>
                                <input id="componentBestSeller"
                                    type="Checkbox"
                                />
                            </Row>

                            <Row>
                                <label htmlFor="componentLikeRating">Like Rating: </label>
                                <input id="componentLikeRating"
                                    type="Checkbox"
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