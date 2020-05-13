import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Button = (props) => {
    return(
        <div className="btn-wrapper wow fadeInLeft" style={{
            backgroundColor: props.bgColor ? props.bgColor : "black",
            width: props.width ? props.width : 200,
            height: props.height ? props.height : 45
        }}>
            <Link className="linkto" exact to={props.path} style={{
                width: props.width ? props.width : 200,
                height: props.height ? props.height : 45,
                fontFamily: 'Poppins',
                fontWeight: '600',
                color: "#29291e"
            }}>
                {props.text}
            </Link>
        </div>
    )
}

export default Button