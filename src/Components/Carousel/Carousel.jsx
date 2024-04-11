import './Carousel.css'
import { ChevronLeft , ChevronRight } from 'react-bootstrap-icons';
import strategicIcon from './../../assets/icon-section-white.svg'
import carouselBackgroundOne from './../../assets/carousel1.svg'
import carouselBackgroundTwo from './../../assets/carousel2.svg'
import carouselBackgroundThree from './../../assets/carousel3.svg'
import { useState } from 'react'


function Carousel() {

    const imageBase = [
        carouselBackgroundOne,
        carouselBackgroundTwo,
        carouselBackgroundThree
    ];

    const headerBase = [
        `Brand naming & guidelines`,
        'Brand identity & merchandise',
        'Brand identity & web design'
    ];

    const dateBase = [
        '2019 Project',
        '2018 Project',
        '2016 Project'
    ];

    const nameBase = [
        'Learn Product Roadmap',
        'New Majestic Hotel',
        'Crypto Dashboard'
    ]

    
    const [number, setNumber] = useState(0)

    function nextBtn () {
        setNumber((s) => s + 1)

        if (number >= 2 ) {
            setNumber(0)
        }
    }

    function backBtn () {
        setNumber((s) => s - 1)

        if (number <= 0 ) {
            setNumber(2)
        }
    }

    return (
        <section className="app_carousel">
            <div className="carousel__inner">
                <div className="carousel__left">
                    <div className="carousel_text_buttons">
                        <div className="carousel_text">
                            <span className="carousel_text_span">{headerBase[number]}</span>
                        </div>

                        <div className="carousel_buttons">
                            <button className="back_button" onClick={backBtn}><ChevronLeft /></button>
                            <button className="next_button" onClick={nextBtn}><ChevronRight /></button>
                        </div>
                    </div>
                </div>

                <div className="carousel_icon">
                <img src={strategicIcon} />
            </div>

                <div className="carousel__right">
                    <div className="carousel_image_text">
                        <div className="carousel_image">
                            <img src={imageBase[number]} alt="carousel1" />
                        </div>

                        <div className="carousel_texts">
                            <span className="carousel_text_name">
                            {nameBase[number]}
                            </span>

                            <span className="carousel_text_date">
                            {dateBase[number]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;