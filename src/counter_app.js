// Functional Component: 
/*
 It's A JavaScript function that returns a JSX code (JavaScript XML)

 . Earlier, functional components ware sateless,and only class components could manage state.
 . With the intruduction of React Hooks (like useState and useEffect), functional components can now 
 be stetefull 

*/

import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import './counter.css'
import { grey, orange, red } from "@mui/material/colors";
// function CounterApp() {
//     return (
//         <div></div>
//     );
// }

// export default CounterApp;
const typoghraphyStyle = { color: "white", fontSize: 100 }
const buttonStyle = {
    color: "white",
    backgroundColor: "red",
    fontSize: 20
}

const CounterApp = () => {
    const [counter, setCounterValue] = useState(0);// State with initial value 0
    const increment = () => {
        setCounterValue(counter + 1);
    };

    const decrement = () => {
        setCounterValue(counter - 1);
    };

    return (
        <Box className="counter-box" >
            <Button sx={buttonStyle}
                onClick={increment}
                variant="contained"> Increment </Button>
            <Typography sx={typoghraphyStyle} className="counter-typograpy"> {counter} </Typography>
            <Button sx={buttonStyle}
                onClick={decrement}
                variant="contained"> Decrement </Button>
        </Box>
    )

}
export default CounterApp;

/*

+ -> 

Dispaly counter value 

-  -> 

*/