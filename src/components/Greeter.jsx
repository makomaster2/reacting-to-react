import React from "react";

const Greeting = (props) => {
    return (
        <>
            <h1>{props.phrase}, {props.name}.</h1>
        </>
    )
}

export default Greeting;