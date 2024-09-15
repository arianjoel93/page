import { Link } from "react-router-dom";
import "./Footer.scss";
import { InputText } from 'primereact/inputtext';
import logo from "../../../assets/logo.png";
import qr from "../../../assets/qrcode-inicio.png";
import { useState } from "react";

const Footer = () => {
    const scrollToMyRef = (id) => {
        document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    };

    const [message, setMessage] = useState('');
    const fast_links = [
        {
            title: "What You Need to Know",
            link: [
                { title: "About Me", url: "/about-me" },
                { title: "Contact Me", url: "https://joeltrincado.blog/contacto" },
                // { title: "Upcoming Services", url: "https://wa.me/+5213344703129" },
                { title: "Blog", url: "https://joeltrincado.blog" },
            ]
        },
    ];

    return (
        <footer className='Footer'>
            <div className="int_Footer container">
                <div className="contact">
                    <h1>We’re in Touch</h1>
                    <p>Our conversation is just beginning</p>
                    <span className="p-input-icon-left">
                        <i className="pi pi-whatsapp" />
                        <InputText placeholder="WhatsApp" value={message} onChange={(e) => setMessage(e.target.value)} />
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
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <Link to={"/"} className="logo_footer">
                    <img src={logo} alt="logo" loading="lazy" />
                    <p>Joel Trincado</p>
                </Link>
                <img className="qr" src={qr} alt="qr-blog" />
            </div>
        </footer>
    );
}

export default Footer;
