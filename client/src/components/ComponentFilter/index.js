import React, { useState } from "react";
import { Card, Collapse, Button, Fade } from 'react-bootstrap';
function ComponentFilter() {
    const [open, setOpen] = useState(false);

    return (

        <div className="p-3 m-3 text-center" style={{width: '100%'}}>
            <Button className="small gold-background maroon-font red-shadow-hover transition no-border red-bg-active" onClick={() => setOpen(!open)}
                aria-controls="filterDiv"
                aria-expanded={open}>Filter Search
            </Button>
            <div>
                <Collapse in={open} >
                        <div className="bg-red gold-font text-center rounded" id="filterDiv">
                            <Card body  className="bg-red" style={{ width: '100%' }}>
                                <p className="small">Filter stuff goes here!</p>
                                <Button>Test</Button>
                            </Card>
                        </div>
                </Collapse>
            </div>
        </div>
    );
}

export default ComponentFilter;