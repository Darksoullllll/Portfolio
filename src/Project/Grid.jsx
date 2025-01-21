import Card from "./Card";
import "./project.css"
import PropTypes from "prop-types";

function Grid({ projects }){
    return(
        <div className ="grd">
            {projects.map((project) => (
                <Card key={project.key} title={project.title} image={project.img} description={project.description} />
            ))}
        </div>
    );
};

Grid.propTypes = {
    projects: PropTypes.array.isRequired, // Ensure title is a string and required
}


export default Grid;