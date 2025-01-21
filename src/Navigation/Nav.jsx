import "../index.css";
import "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                Abhinav.
            </div>
            <ul className="nav-links">
                <li><a href="#homesection">Home</a></li>
                <li><a href="#aboutsection">About</a></li>
                <li><a href="#projectsection">Projects</a></li>
                <li><a href="#contactsection">Contact</a></li>
                <button id="resume"><li><a href="#contact">Resume</a></li></button>
            </ul>
        </div>
    );
}

export default NavBar;
