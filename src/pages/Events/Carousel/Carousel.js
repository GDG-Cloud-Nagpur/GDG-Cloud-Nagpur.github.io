import React, {useRef, useState} from 'react'
import {Images} from '../CarouselData.js'
import Slider from 'react-slick'
import img1 from '../../../Assets/Images/img1.jpeg'
import img2 from '../../../Assets/Images/img2.jpeg'
import img3 from '../../../Assets/Images/img3.jpeg'
import img4 from '../../../Assets/Images/img4.jpeg'
// import img5 from "../../../Assets/Images/222.jfif"
import './styles.css'

export default function EventsCarousel() {
    const settings = {
        className: 'slicky_boi',
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                // breakpoint: 1024,
                // settings: {
                //   slidesToShow: 3,
                //   slidesToScroll: 3,
                //   infinite: true,
                //   dots: true
            },
        ],
    }
    return (
        <>
            <Slider {...settings}>
                <img src={img1} className="carousel_image"></img>

                <img src={img2} className="carousel_image"></img>

                <img src={img3} className="carousel_image"></img>

                <img src={img4} className="carousel_image"></img>

                {/* <img src={img5} className="carousel_image" ></img> */}
            </Slider>
        </>
    )
}
