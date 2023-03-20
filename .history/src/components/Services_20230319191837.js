import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = ()=>{
    return(
        <>
        <div className="services">
        <Carousel>
            <div>
                <img src={pic2} alt="#"/>
                <p>Full Stack</p>
            </div>
            <div>
                <img src={pic3} alt="#"/>
                <p>Full Stack</p>
            </div>
        </Carousel>

        </div>
        </>
    );
}

export default Services