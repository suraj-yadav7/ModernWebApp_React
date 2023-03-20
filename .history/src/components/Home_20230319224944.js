import React from 'react';
import vg from "../Assets/img1.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
        <h1>TechPedia</h1>
        <p>We provide solution for all tech problems</p>
        </main>
        
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics"/>
        <p>
            We have best team to solve different problems of clients, customer, etc at very
            affordable price
        </p>
      </div>

      <div className='home3' id="about">
        <div>
        <h4>Who we are?</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam expedita aliquam porro. Unde voluptas maxime repudiandae aliquam quam neque fuga, suscipit porro molestias quasi, officia dolor perferendis expedita repellendus fugiat labore excepturi ducimus debitis dolores.</p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
        <div>
          <h3>Brands</h3>
        </div>

        <article className='icons'>
          <div className="socialIcon" style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div className="socialIcon" style={{animationDelay: "0.5s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          <div className="socialIcon" style={{animationDelay: "0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div className="socialIcon" style={{animationDelay: "0.9s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}

export default Home
