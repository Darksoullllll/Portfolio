import "./project.css"
import PropTypes from "prop-types";

function Card({ title,image,description }){
    return(
        <div className="para-cont">
            <img src={image} alt=""  id ="imgs"/>
            <h4 id="para-title">{title}</h4>
            <p id="para"> {description}</p>
        </div>
    );
}

Card.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
}

export default Card;