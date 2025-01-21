import NavBar from "./Navigation/Nav"
import Home from "./Home/Home";
import About from "./About/about";
import Project from "./Project/project";
import Contact from "./contact/Contacts";


function App(){
    return(
        <> 
        <NavBar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        </>
    );
}

export default App;