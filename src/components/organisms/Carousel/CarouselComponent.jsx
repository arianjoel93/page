import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import banner_1 from "../../../assets/banner_1.png"
import banner_2 from "../../../assets/banner_2.png"
import banner_3 from "../../../assets/banner_3.png"
import "./CarouselComponent.scss"
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
    const [products, setProducts] = useState([
        { title: "Desarrollo de sitios web", subtitle: "Desde sitios corporativos hasta tiendas online, creamos experiencias únicas que impulsan tu negocio hacia el éxito online.", image: banner_1, button: "Cotizar un sitio", message: "Hola, quiero cotizar un sitio web" },
        { title: "Desarrollo de aplicaciones Windows", subtitle: "Desarrollamos aplicaciones de escritorio innovadoras y eficientes para potenciar tu negocio. Transformamos tu visión en realidad con diseño intuitivo y funcionalidades personalizadas.", image: banner_2, button: "Cotizar una App", message: "Hola, quiero cotizar un software o aplicación" },
        { title: "Modelos de predicción con IA", subtitle: "Convierte datos en visiones del mañana con nuestro machine learning.", image: banner_3, button: "Cotizar modelo", message: "Hola, quiero cotizar modelo de predicción" },
    ]);
    const responsiveOptions = [
        {
            breakpoint: '1920px',
            numVisible: 1,
            numScroll: 1
        },
    ];






    const productTemplate = (product) => {
        return (
            <div className="banner">
                <div className='left'>
                    <div className='C_LEFT'>
                        <h1>{product.title}</h1>
                        <p>{product.subtitle}</p>
                        <Link to={`https://wa.me/+5213338419644?text=${product.message}`} target="_blank">
                            <button className='CoffeeButton'>{product.button}</button>
                        </Link>
                    </div>
                </div>
                <div className='right'>
                    <img src={product.image} alt="banner" />
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel"
                itemTemplate={productTemplate} autoplayInterval={10000} />
        </div>
    )
}

export default CarouselComponent