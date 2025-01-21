import Form from "./form";
import Header from "../Project/header";
import "./form.css"

function Contact() {
    return (
        <div className="contact-section" id="contactsection">
            <Header first="Contact" second="Me"/>
            <Form />
        </div>
    );
}

export default Contact;