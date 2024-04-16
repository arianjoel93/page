import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import "./CarouselServices.scss"
import { Link } from 'react-router-dom';

const CarouselServices = ({ categories }) => {

    const responsiveOptions = [
        {
            breakpoint: '1920px',
            numVisible: 3,
            numScroll: 1
        },

    ];

    const productTemplate = (product) => {
        return (
            <div className="banner2">
                <Link to={product?.url}>
                    <img src={product?.image} alt={product?.imgAlt} loading='lazy' />
                    <h1>{product?.title}</h1>
                </Link>
            </div>
        );
    };

    

    return (
        <div className="card2 container">
            <Carousel value={categories} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel"
                itemTemplate={productTemplate} autoplayInterval={6000} />
        </div>
    )
}

export default CarouselServices