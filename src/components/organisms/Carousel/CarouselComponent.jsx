import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import banner_1 from "../../../assets/banner_1.png"
import banner_2 from "../../../assets/banner_2.png"
import banner_3 from "../../../assets/banner_3.png"
import banner_4 from "../../../assets/Ansigne.png"
import "./CarouselComponent.scss"
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
    const [products, setProducts] = useState([
        { title: "Desarrollo de sitios web", subtitle: "Desde sitios corporativos hasta tiendas online, creamos experiencias únicas que impulsan tu negocio hacia el éxito online.", image: banner_1, button: "Cotizar un sitio", message: "Hola, quiero cotizar un sitio web", alt:"banner_desarrollo" },
        { title: "Creación de logos", subtitle: "Con un enfoque centrado en tus necesidades y visión, creamos logos únicos y memorables que reflejan la identidad de tu marca.", image: banner_4, button: "Cotizar un logo", message: "Hola, quiero cotizar un logo", alt:"banner_logo" },
        { title: "Desarrollo de aplicaciones Windows", subtitle: "Desarrollamos aplicaciones de escritorio innovadoras y eficientes para potenciar tu negocio. Transformamos tu visión en realidad con diseño intuitivo y funcionalidades personalizadas.", image: banner_2, button: "Cotizar una App", message: "Hola, quiero cotizar un software o aplicación", alt:"banner_aplicaciones" },
        { title: "Modelos de predicción con ML", subtitle: "Convierte datos en visiones del mañana con nuestro machine learning: regresión lineal, regresión logística, árboles de decisiones, ramdom forest, K means, etc.", image: banner_3, button: "Cotizar modelo", message: "Hola, quiero cotizar modelo de predicción", alt:"banner_modelos" },
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
                        <Link to={`https://wa.me/+5213344703129?text=${product.message}`} target="_blank">
                            <button className='CoffeeButton'>{product.button}</button>
                        </Link>
                    </div>
                </div>
                <div className='right'>
                    <img src={product.image} alt={product.alt} />
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