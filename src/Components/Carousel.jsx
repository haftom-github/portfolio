/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import './carousel.css';
import ArrowRight from '../assets/arrow-right.svg?react';
import ArrowLeft from '../assets/arrow-left.svg?react';
import { css } from '@emotion/react';

const Carousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageref = useRef(null);

    const captionStyle = css`
        ::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 1rem;
            font-size: 1.5rem;
            text-align: center;
        }
    `;

    const handleImageLoaded = () => {
        imageref.current.classList.remove('slide-in');

    }

    const nextSlide = () => {
        imageref.current.classList.add('slide-in');
        setTimeout(()=>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 300)
    };

    const prevSlide = () => {
        imageref.current.classList.add('slide-in');
        setTimeout(()=>{
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }, 300)
    };

    const changeSlide = (index) => {
        setTimeout(()=>{
            setCurrentIndex(index);
        }, 300)
    }

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button prev"><ArrowLeft /></button>
            <div className='slide'>
                <img css={captionStyle} onLoad={handleImageLoaded} ref={imageref} src={images[currentIndex].url} alt="carousel" className="carousel-image slide-in" />
                <div className='caption'>{images[currentIndex].caption}</div>
            </div>
            <button onClick={nextSlide} className="carousel-button next"><ArrowRight /></button>
            <div className='carousel-dots'>
                {images.map((image, index) => (
                    <div onClick={()=>changeSlide(index)} key={index} className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;