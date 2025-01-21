import "./project.css"
import PropTypes from "prop-types";

function Header({ first, second }){
    return(
        <div className = "header">
            <h1 id="head"> {first} <span id="sp">{second}</span> </h1>
        </div>
    );
}

Header.propTypes = {
    first: PropTypes.string.isRequired, 
    second: PropTypes.string.isRequired, 
}

export default Header;