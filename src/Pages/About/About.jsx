import "./About.scss"
import congreso from "../../assets/congreso.jpeg"
import profile from "../../assets/meet.jpeg"
import js from "../../assets/js.png"
import ia from "../../assets/ia.png"
import client_0 from "../../assets/meet.jpeg"
import client_1 from "../../assets/WhatsApp Image 2024-04-27 at 23.02.21.jpeg"
import client_2 from "../../assets/WhatsApp Image 2024-04-27 at 23.07.36.jpeg"
import client_3 from "../../assets/WhatsApp Image 2024-04-27 at 23.07.55.jpeg"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import HelmetComponents from "../../components/molecules/Helmet/HelmetComponents"

const About = () => {
    const clients_opinions = [
        { id: 0, img: client_0, alt: "client_0" },
        { id: 1, img: client_1, alt: "client_1" },
        // { id: 2, img: client_2, alt: "client_2" },
        // { id: 3, img: client_3, alt: "client_3" },
    ]

    useEffect(() => {
        const scrollToMyRef = (id) => {
            document.getElementById(`about`)?.scrollIntoView({ behavior: "smooth" });

        };

        scrollToMyRef()
    }, [])
    return (
        <>
            <HelmetComponents description={"Desarrollador web apasionado con amplia experiencia en diseño y desarrollo de sitios web. Conóceme más sobre mí y mi trabajo en el fascinante mundo del desarrollo web."} keywords={"qué es un sitio web, trabajador autónomo, desarrollador web freelancer"} subtitle={"Sobre mi"}></HelmetComponents>
            <div className='About' id="about">
                <div className="section_about">
                    <div className="info">
                        <h2>Mi enfoque</h2>
                        <p>Desarrollador web
                            con una trayectoria de más de 3 años en la industria. Mi enfoque se
                            centra en el desarrollo Frontend, con alto dominio de React para crear
                            interfaces modernas y funcionales que satisfacen las
                            necesidades de mis clientes. Mis habilidades en HTML, CSS y JavaScript están
                            sólidamente fundamentadas, lo que me permite implementar diseños precisos y
                            efectivos que mejoran la experiencia del usuario.
                        </p>
                    </div>
                    <img src={profile} alt="img_profile" loading="lazy" />
                </div>
                <div className="container">
                    <div className="section_about_2">
                        <img src={js} alt="frontend" loading="lazy" />
                        <div className="info">
                            <h2>Otras herramientas</h2>
                            <p>
                                Además de mi experiencia en el desarrollo Frontend, cuento con conocimientos
                                intermedios en el desarrollo backend utilizando tecnologías como Node.js y FastAPI en Python.
                                Esta versatilidad en el stack tecnológico me ha permitido diseñar y desplegar aplicaciones web
                                completas y eficientes, garantizando un funcionamiento óptimo y una escalabilidad adecuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section_about">
                    <div className="info">
                        <div className="container">
                            <h2>Experiencia con la IA</h2>
                            <p>
                                En el ámbito de la inteligencia artificial, poseo experiencia en la
                                implementación de modelos de predicción a través de Machine Learning en Python,
                                lo que me ha capacitado para realizar análisis avanzados de datos y generar pronósticos precisos
                                para diversas industrias. Asimismo, mi destreza en el desarrollo de aplicaciones para escritorio,
                                utilizando Flutter, me ha permitido explorar soluciones multiplataforma y brindar una experiencia
                                de usuario consistente en diferentes dispositivos.
                            </p>
                        </div>
                    </div>
                    <img src={ia} alt="frontend" loading="lazy" />
                </div>
                <div className="container">
                    <div className="section_about_2">
                        <img src={congreso} alt="frontend" loading="lazy" />
                        <div className="info">
                            <h2>Eventos Personales</h2>
                            <p>
                            Durante mi trayectoria como desarrollador, he tenido el privilegio de ser 
                            invitado a participar en congresos y eventos de carácter internacional por 
                            diversos clientes. Estas oportunidades no solo han ampliado mi red de contactos, 
                            sino que también me han permitido mantenerme actualizado sobre las últimas 
                            tendencias y avances en el mundo de la tecnología. Estar presente en estos 
                            eventos me ha brindado una invaluable experiencia y me ha impulsado a seguir 
                            creciendo y mejorando como profesional.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container_section_end">
                    <div className="end_section_2 container">
                            <h2>Galería con clientes</h2>
                        <div className="info">
                            {clients_opinions.map((client) => {
                                return (
                                    <img src={client.img} alt={client.alt} key={client.id} loading="lazy" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="end_section container">
                    <div className="info">
                        <h2>Otras habilidades</h2>
                        <p>También abarco herramientas como Tailwind CSS, MySQL,
                            entre otras, lo que me permite diseñar y desarrollar aplicaciones web de alta calidad y rendimiento.
                            Estoy comprometido con la mejora continua y el aprendizaje constante, siempre en busca de nuevos
                            desafíos que me permitan expandir mi expertise y aportar valor a cada proyecto en el que me involucro.</p>
                    </div>
                    <Link to="https://joeltrincado.com/contacto">
                        <button>Contáctame</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default About