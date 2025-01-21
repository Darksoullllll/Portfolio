import PropTypes from "prop-types";

function CarouselSlide(props) {
    return (
        <div className="carousel-slide">
            <p id = "title">{props.title}</p>
            <p id= "content">{props.content}</p>
        </div>
    );
}

CarouselSlide.propTypes = {
    title: PropTypes.string.isRequired, // Ensure title is a string and required
    content: PropTypes.string.isRequired, // Ensure content is a string and required
};

export default CarouselSlide;
