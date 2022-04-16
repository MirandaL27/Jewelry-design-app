import React from 'react';
import { Dropdown } from 'react-bootstrap'; 

function DropDownItem(props) {
    const {option} = props;

    const handleClick = () => {
        console.log("dropdown option clicked!");
    }

    return (
        <Dropdown.Item onClick={() => handleClick()}>{option}</Dropdown.Item>
    );
}

export default DropDownItem;
