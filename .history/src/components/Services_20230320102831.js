import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import pic2 from "../Assets/pic2.jpg"
import pic3 from "../Assets/pic3.jpg"
const Services = ()=>{
    return(
        <>
        <div className="services">
        <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false } interval={1500}>
            <div>
                <img src={pic1} alt="#"/>
                <p>Web Development</p>
            </div>
            <div>
                <img src={pic2} alt="#"/>
                <p>Web Design</p>
            </div>
            <div>
                <img src={pic3} alt="#"/>
                <p>Software Testing</p>
            </div>
            <div>
                <img src={pic4} alt="#"/>
                <p>Digital Assets</p>
            </div>
            <div>
                <img src={pic2} alt="#"/>
                <p>Full Stack</p>
            </div>
        </Carousel>

        </div>
        </>
    );
}

export default Services