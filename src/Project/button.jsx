import "./project.css"
import PropTypes from "prop-types";

function Button(props){
    return(
        <div className ="btn">
            <button id="probtn" onClick={props.click} >{props.title}</button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired, // Ensure title is a string and required
    click: PropTypes.func.isRequired,
};

export default Button;