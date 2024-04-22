import { Link } from "react-router-dom";
import "./Footer.scss"
import { InputText } from 'primereact/inputtext';
import logo from "../../../assets/logo.png"
import { useState } from "react";


const Footer = () => {
    const scrollToMyRef = (id) => {
        document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });

    };
    const [message, setMessage] = useState('')
    const fast_links = [

        {
            title: "Lo que tienes que saber",
            link: [

                { title: "Sobre mí", url: "/sobre-mi" },
                { title: "Contáctame", url: "https://scatterscience.com/contacto" },
                // { title: "Próximos servicios", url: "https://wa.me/+5213344703129" },
                { title: "Blog", url: "https://scatterscience.com" },
            ]
        },

    ]
    return (
        <footer className='Footer'>
            <div className="int_Footer container">
                <div className="contact">
                    <h1>Estamos en contacto</h1>
                    <p>Nuestra conversación apenas empieza</p>
                    <span className="p-input-icon-left">
                        <i className="pi pi-whatsapp" />
                        <InputText placeholder="Whatsapp" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <Link to={`https://wa.me/+5213344703129?text=${message}`}>
                            <i className="pi pi-chevron-right" />
                        </Link>
                    </span>
                </div>
                <div className="links_footer">
                    {fast_links.map((_, index) => {
                        return (
                            <div key={index} className="flex-column">
                                <h2>{_.title}</h2>
                                {_?.link.map((link, ind) => {
                                    return (
                                        <Link to={link?.url} key={ind}>{link.title}</Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <Link to={"/"} className="logo_footer">
                    <img src={logo} alt="logo" loading="lazy" />
                    <p>Joel Trincado</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer