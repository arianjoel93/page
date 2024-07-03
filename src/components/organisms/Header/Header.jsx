import "./Header.scss"
import React, { useState } from 'react';
import logo from "../../../assets/logo.png"
import marker from "../../../assets/icons/marker.svg"
import facebook from "../../../assets/icons/facebook.svg"
import instagram from "../../../assets/icons/instagram.svg"
import github from "../../../assets/icons/github.svg"
import linkedIn from "../../../assets/icons/linkedIn.svg"
import { Link, useNavigate } from "react-router-dom";
import Maps from "../Maps/Maps";
import { Sidebar } from 'primereact/sidebar';



const Header = () => {
    const screen = window.screen.width
    const icons = [
        { name: "facebook", image: facebook, alt: "facebook", url: "https://www.facebook.com/profile.php?id=61550516717822" },
        { name: "instagram", image: instagram, alt: "instagram", url: "https://www.instagram.com/scatter.science?igsh=MWJ1N3h4bmNxODlpaA==" },
        { name: "github", image: github, alt: "github", url: "https://github.com/arianjoel93" },
        { name: "linkedIn", image: linkedIn, alt: "linkedIn", url: "https://www.linkedin.com/in/joel-ari%C3%A1n-tv" },
    ]

    const navOptions = [
        { name: "Inicio", subTitle: "Página de inicio", url: "/" },
        { name: "Sobre mi", subTitle: "Página de inicio", url: "/sobre-mi" },
        { name: "Plantillas", subTitle: "Página de inicio", url: "/plantillas" },
        { name: "Blog", subTitle: "Página de inicio", url: "https://scatterscience.com" },
    ]
    const navigate = useNavigate()

    const scrollToMyRef = (id) => {
        navigate('/plantillas')
        

    };
    const data = [
        { id: 0, contry: "México", address: "", location: [20.676667, -103.347500] },

    ]
    const [visible, setVisible] = useState(false);

    return (
        <header className='Header'>
            <Sidebar className='mapsContainer' position='bottom' visible={visible} onHide={() => setVisible(false)}>
                <Maps city={data[0].location} />
            </Sidebar>
            <div className="C_header Container">
                <div className="bar_first">
                    <div className="icons_social">
                        {icons?.map((_, index) => {
                            return (
                                <Link key={index} to={_?.url} target="_blank">
                                    <img src={_.image} alt={_.alt} />
                                </Link>
                            )
                        })}
                    </div>
                    <button className="location_map" onClick={() => setVisible(true)}>
                        <img src={marker} alt="marker" />
                        <p>Guadalajara, México</p>
                    </button>
                </div>

                <div className="bar_second">
                    {screen > 768 &&
                        <button className="btn_search" onClick={() => scrollToMyRef("projects")}>
                            <i className="pi pi-eye" />
                            <p>Ver plantillas</p>
                        </button>}
                    <Link className="logo" to={"/"}>
                        <img src={logo} alt="logo"/>
                        <p>Joel Trincado</p>
                    </Link>
                    {screen > 768 &&
                        <Link to='https://wa.me/+5213344703129' target="_blank">
                            <button className="btn_whatsapp">
                                <i className="pi pi-whatsapp" />
                                <p>Contactar</p>
                            </button>
                        </Link>
                    }
                </div>
                <div className="third_bar">
                    <nav className="options_nav">
                        {navOptions?.map((_, index) => {
                            return (
                                <Link key={index} to={_?.url}>
                                    {_.name}
                                </Link>
                            )
                        })}
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header
