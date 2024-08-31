import "./About.scss";
import congreso from "../../assets/congreso.jpeg";
import profile from "../../assets/meet.jpeg";
import js from "../../assets/js.png";
import ia from "../../assets/ia.png";
import client_0 from "../../assets/meet.jpeg";
import client_1 from "../../assets/WhatsApp Image 2024-04-27 at 23.02.21.jpeg";
import client_2 from "../../assets/WhatsApp Image 2024-04-27 at 23.07.36.jpeg";
import client_3 from "../../assets/WhatsApp Image 2024-04-27 at 23.07.55.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HelmetComponents from "../../components/molecules/Helmet/HelmetComponents";

const About = () => {
    const clients_opinions = [
        { id: 0, img: client_0, alt: "client_0" },
        { id: 1, img: client_1, alt: "client_1" },
        // { id: 2, img: client_2, alt: "client_2" },
        // { id: 3, img: client_3, alt: "client_3" },
    ];

    useEffect(() => {
        const scrollToMyRef = () => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        };

        scrollToMyRef();
    }, []);

    return (
        <>
            <HelmetComponents 
                description={"Passionate web developer with extensive experience in designing and developing websites. Learn more about me and my work in the fascinating world of web development."} 
                keywords={"what is a website, freelance developer, web developer freelancer"} 
                subtitle={"About Me"} 
            />
            <div className='About' id="about">
                <div className="section_about">
                    <div className="info">
                        <h2>My Approach</h2>
                        <p>
                            I am a web developer with over 3 years of experience in the industry. My focus is on Frontend development, with a high level of proficiency in React to create modern and functional interfaces that meet my clients' needs. My skills in HTML, CSS, and JavaScript are well-founded, allowing me to implement precise and effective designs that enhance the user experience.
                        </p>
                    </div>
                    <img src={profile} alt="img_profile" loading="lazy" />
                </div>
                <div className="container">
                    <div className="section_about_2">
                        <img src={js} alt="frontend" loading="lazy" />
                        <div className="info">
                            <h2>Other Tools</h2>
                            <p>
                                In addition to my Frontend development experience, I have intermediate knowledge in backend development using technologies like Node.js and Python's FastAPI. This versatility in the tech stack has enabled me to design and deploy complete and efficient web applications, ensuring optimal performance and adequate scalability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section_about">
                    <div className="info">
                        <div className="container">
                            <h2>AI Experience</h2>
                            <p>
                                In the field of artificial intelligence, I have experience in implementing predictive models through Machine Learning in Python, which has equipped me to conduct advanced data analysis and generate accurate forecasts for various industries. Additionally, my skill in developing desktop applications using Flutter has allowed me to explore cross-platform solutions and provide a consistent user experience across different devices.
                            </p>
                        </div>
                    </div>
                    <img src={ia} alt="frontend" loading="lazy" />
                </div>
                <div className="container">
                    <div className="section_about_2">
                        <img src={congreso} alt="frontend" loading="lazy" />
                        <div className="info">
                            <h2>Personal Events</h2>
                            <p>
                                During my career as a developer, I have had the privilege of being invited to participate in international conferences and events by various clients. These opportunities have not only expanded my network but have also allowed me to stay updated on the latest trends and advancements in the tech world. Attending these events has provided me with invaluable experience and motivated me to continue growing and improving as a professional.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container_section_end">
                    <div className="end_section_2 container">
                        <h2>Client Gallery</h2>
                        <div className="info">
                            {clients_opinions.map((client) => (
                                <img src={client.img} alt={client.alt} key={client.id} loading="lazy" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="end_section container">
                    <div className="info">
                        <h2>Other Skills</h2>
                        <p>
                            I also work with tools like Tailwind CSS, MySQL, among others, which allows me to design and develop high-quality, high-performance web applications. I am committed to continuous improvement and constant learning, always seeking new challenges that allow me to expand my expertise and add value to every project I am involved in.
                        </p>
                    </div>
                    <Link to="https://joeltrincado.com/contacto">
                        <button>Contact Me</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default About;
