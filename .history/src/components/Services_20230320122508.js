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
        <div className="services" style={{height: "100px"}}>
        <Carousel infiniteLoop autoPlay  showArrows={false} showStatus={false} showThumbs={false } interval={1500}>
            <div >
                <img src={pic2} alt="#"/>
            </div>
            <div>
                <img src={pic1} alt="#"/>
            </div>
            <div>
                <img src={pic3} alt="#"/>
            </div>
            <div>
                <img src={pic4} alt="#"/>
            </div>
        </Carousel>
        </div>
        </>
    );
}

export default Services