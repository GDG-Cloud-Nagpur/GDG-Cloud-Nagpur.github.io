import React from 'react'
import './Hero.css'
// import Herologo from "../../Assets/CDG-Nagpur-Logo.png";
import ExploreIcon from '../../Assets/chevrons-down.svg'
import logosvg from '../../Assets/CDG-Nagpur-Logo_1.png'

import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const move = () => {
    // window.scrollTo({
    // 	top: window.innerHeight - 20,
    // 	behavior: "smooth",
    // });
    if (window.innerWidth > 1000) {
        window.scrollTo({
            top: window.innerHeight - 40,
            behavior: 'smooth',
        })
    } else {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }
}

function Hero() {
    return (
        <section className="hero-section">
            <HeroLeft />
            <div className="hero-section-center">
                <div className="hero-section-main">
                    <img src={logosvg} alt="Hero Logo" />
                    {/* <div className="hero-join-us" style={{margin:"-100px"}}>
						<a
							href="https://gdsc.community.dev/indian-institute-of-information-technology-allahabad-prayagraj/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Join Us
						</a>
					</div> */}
                </div>
                <div class="hero-explore">
                    {/* <p>Explore</p>
                    <img src={ExploreIcon} alt="Explore"/> */}
                    <img
                        onClick={move}
                        src={ExploreIcon}
                        alt="arrow"
                        color="white"
                        className="animatedArrow"
                    />
                </div>
            </div>
            <HeroRight />
        </section>
    )
}

export default Hero
