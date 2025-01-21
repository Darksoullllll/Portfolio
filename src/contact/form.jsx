import "./form.css"


function Form(){
    return(
        <div className="contact-form-container">
            <form className="contact-form">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    rows="5"
                    required
                ></textarea>

                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </form>
        </div>
    )
}
export default Form;