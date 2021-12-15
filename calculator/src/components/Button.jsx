import React from "react";
import './Button.css'

const valIsAnOperator = val =>{
    if(val === "." || val === "C" || val === "±" || val === "%")
    {
        return "other";
    }else if(val === "/" || val === "X" || val === "-" || val === "+" || val === "=")
    {
        return "operator";
    }

    return "";
}

export const Button = props => (
    <div className = {`button-wrapper ${valIsAnOperator(props.children)}`} onClick= {()=> props.handleClick(props.children)}>
        {props.children}
    </div>
)

// export default Button;