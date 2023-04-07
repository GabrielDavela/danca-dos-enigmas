import React from "react";
import "./Button.css";

const Button = ({text, functionB}) => {

    return(
        <button className="button__principal" onClick={functionB}>{text}</button>
    )
}
export default Button;