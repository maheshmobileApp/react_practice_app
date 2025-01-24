/*
In React Functional Components,
 props(Properties) are used to pass data from a parent component to a child component

*/
import React, { useState } from "react";
import { Button, Card, Typography, CardMedia, Box } from "@mui/material";
const ParentComponent = () => {
    return (
        <Box>
            <ChildComponet name="Mahesh" />
            <ChildComponet name="Rajesh" />
            <ChildComponet name="Raghu sojdfojasojfosa" age="34" />
            <ChildComponet name="Mahesh" />
            <ChildComponet name="Rajesh" />
            <ChildComponet name="Raghu sojdfojasojfosa" age="34" />
            <ChildComponet name="Mahesh" />
            <ChildComponet name="Rajesh" />
            <ChildComponet name="Raghu sojdfojasojfosa" age="34" />
            <ChildComponet name="Mahesh" />
            <ChildComponet name="Rajesh" />
            <ChildComponet name="Raghu sojdfojasojfosa" age="34" />
        </Box>
    );

}

export default ParentComponent;


const ChildComponet = ({ name, age }) => {

    return (<Box>
        <Typography>{name}</Typography>
        <Typography>{age}</Typography>

    </Box>)

}
/*
JS 
*/