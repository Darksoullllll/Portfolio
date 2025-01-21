import { useState } from "react";
import CarouselSlide from "./CarouselSlide";
import "./carousel.css";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {   
            key: 1,
            title: "Who I'm ", 
            content: "Hi, I'm Abhinav Gautam, a passionate fresher actively seeking exciting job opportunities. Based in India, I specialize in Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) technologies, aiming to solve complex problems with innovative solutions. Alongside my interest in AI, I have honed my skills in frontend development, creating intuitive and user-friendly web interfaces." 
        },
        {   
            key: 2,
            title: "My Education",
            content: "I hold a B.Tech in Computer Science, specializing in Data Science, with a CGPA of 8.9. I completed my secondary education at Kendriya Vidyalaya Pragati Vihar, New Delhi." 
        },
        {   

            key: 3,
            title: "Tech I Used", 
            content: "My tech stack includes Python, React, JavaScript, C++, Scikit-learn, and TensorFlow, which I utilize to build innovative and efficient solutions." 
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="carousel-slide">
                        <div className="carousel-content">
                            <CarouselSlide 
                                title = {slide.title}
                                content= {slide.content}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className="carousel-btn prev" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="carousel-btn next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;
