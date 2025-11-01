import "./form.css"


function Form(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        const response = await fetch("http://192.168.29.46:5173/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            alert("✅ Message sent successfully!");
            e.target.reset();
        }
        else {
            alert("❌ Failed to send message. Please try again later.");
        }
    };
    return(
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
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