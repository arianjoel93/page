import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import banner_1 from "../../../assets/banner_1.png";
import banner_2 from "../../../assets/banner_2.png";
import "./CarouselComponent.scss";
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
    const screen = window.screen.width;
    const [products] = useState([
        { 
            title: "Professional Website Development", 
            subtitle: "With over 3 years of experience, we create unique experiences that drive your business to online success, from corporate sites to online stores.", 
            image: banner_1, 
            button: "Get a Quote", 
            message: "Hi, I want a quote for a website", 
            alt: "website_development_banner" 
        },
        { 
            title: "Windows Application Development", 
            subtitle: "We develop innovative and efficient desktop applications to boost your business. We turn your vision into reality with intuitive design and customized functionalities.", 
            image: banner_2, 
            button: "Get an App Quote", 
            message: "Hi, I want a quote for software or application", 
            alt: "application_development_banner" 
        },
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
                    {screen > 768 && <div className='shadow'></div>}
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
            <Carousel 
                value={products} 
                numVisible={1} 
                numScroll={1} 
                responsiveOptions={responsiveOptions} 
                className="custom-carousel"
                itemTemplate={productTemplate} 
                autoplayInterval={10000} 
            />
        </div>
    );
}

export default CarouselComponent;
