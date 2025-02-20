import React, { useEffect, useState, useRef } from 'react';
import './carousel.css';
import ArrowRight from '../assets/arrow-right.svg?react';
import ArrowLeft from '../assets/arrow-left.svg?react';

const Carousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [captionState, setCaptionState] = useState(0);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const seeMoreButtonRef = useRef(null);

    useEffect(() => {
        if (textRef.current.scrollWidth > textRef.current.clientWidth){
            setCaptionState(1)
        }
        else setCaptionState(0)
        return ()=>{console.log(captionState)}
    }, [images, currentIndex])
    const handleSeeMore = () => {
        if (captionState === 1) setCaptionState(2)
        else setCaptionState(1)
    }
    const handleImageLoaded = () => {
        imageRef.current.classList.remove('slide-in');
    }

    const nextSlide = () => {
        imageRef.current.classList.add('slide-in');
        setTimeout(()=>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 300)
    };

    const prevSlide = () => {
        imageRef.current.classList.add('slide-in');
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
                <img onLoad={handleImageLoaded} ref={imageRef} src={images[currentIndex].url} alt="carousel" className="carousel-image slide-in" />
                <div className='caption'>
                    <div ref={textRef} className={captionState !== 2 ? 'text-elipsis': ''}>{images[currentIndex].caption}</div>
                    <button onClick={handleSeeMore} ref={seeMoreButtonRef} className={captionState === 0 ? 'hide': ''}>{captionState==1?"more":"less"}</button>
                </div>
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