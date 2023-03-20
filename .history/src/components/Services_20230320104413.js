import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import pic1 from "../Assets/pic1.jpg"
import pic2 from "../Assets/pic2.jpg"
import pic3 from "../Assets/pic3.jpg"
import pic4 from "../Assets/pic4.jpg"
const Services = ()=>{
    return(
        <>
        <div className="services">
        <Carousel infiniteLoop autoPlay showIndicators={false} showArrows={false} showStatus={false} showThumbs={false } interval={1500}>
            <div >
                <img src={pic2} alt="#"/>
                <p>Web Development</p>
            </div>
            <div>
                <img src={pic1} alt="#"/>
                <p>Web Design</p>
            </div>
            <div>
                <img src={pic3} alt="#"/>
                <p>Digital Assets</p>
            </div>
            <div>
                <img src={pic4} alt="#"/>
                <p>Software Testing</p>
            </div>
        </Carousel>
        </div>
        </>
    );
}

export default Services