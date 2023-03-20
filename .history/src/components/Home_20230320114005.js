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
        <div>
        <img src={vg} alt="Graphics"/>
        <p>
        Our commitment of work is based on complete serenity of our prestigious clients. We commit ourselves completely till the conclusion of project with extreme dedication and determination. The time taken to select a resource after different modes of screening till the client recruits the resource is of high importance.
        </p>
        </div>
      </div>

      <div className='home3' id="about">
        <div>
        <h4>Who we are?</h4>
        <p>Tech Service has wide, service and maintenance, expertise with a team of experienced engineers and technicians skilled in safety valve. We have never compromised on the quality and the services provided to the customer. We have been an established and popular company with an excellent track record for the best customer satisfaction.   We believe in keeping the customers happy and providing them with products at a very competent price. </p>
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
