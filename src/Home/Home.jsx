import "../index.css";
import linkedin from "../assets/icon/linkdin.png";
import github from "../assets/icon/github.png";
import leetcode from "../assets/icon/leetcode.png";
import myimg from "../assets/self.jpg";


const imgheight = 30;

function Home(){

    const handleHireClick = () => {
        const contactsectionpage = document.getElementById("contactsection");
        contactsectionpage.scrollIntoView({ behavior: "smooth" });
    };


    const go_to_contact = ()=>{
        const contactsectionpage = document.getElementById("contactsection");
        contactsectionpage.scrollIntoView({ behavior: "smooth" });
    }

    return(

        <div className="container" id="homesection">
            <div id="about">
                <h1>Hi,I&apos;m Abhinav Gautam</h1>
                <h2>AI Engineer</h2>
                <p>
                A B.Tech Computer Science graduate (specialization in AI, ML, & Data Science) currently
                working as a Software Development Engineer at Samsung R&D Delhi. 
                </p>
                <div className = "buttons">
                    <button id ="cont" onClick = {go_to_contact}>Contact</button>
                    <button id = "hire" onClick={handleHireClick}>Hire</button>
                </div>
                
            </div>
            <div id ="social-c">
                <ul className="media">
                    <li><a href="https://github.com/Darksoullllll"><img src= {github} alt="github" height={imgheight} /></a></li>
                    <li><a href="https://leetcode.com/u/Darksoulllll/"><img src= {leetcode} alt="leetcode" height={imgheight}/></a></li>
                    <li><a href="https://www.linkedin.com/in/abhinav-gautam-62b179226"><img src= {linkedin} alt="linkedin" height={imgheight} /></a></li>
                </ul>
            </div>
            <div id = "my-image">
                <img src={myimg} alt=""   id = "abhinav-img"/>
            </div>  
        </div>
    );
}
export default Home;