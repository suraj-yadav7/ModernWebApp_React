import React from 'react';
import vg from "../Assets/img1.png"


const Home = () => {
  return (
    <>
      <div className='home'>
        <h1>TechPidia</h1>
        <p>We provide solution for all tech problems</p>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics"/>
        <p>
            We have best team to solve different problems of clients, customer, etc at very
            affordable price
        </p>
      </div>

      <div className='home3'>
        <h4>Who we are?</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam expedita aliquam porro. Unde voluptas maxime repudiandae aliquam quam neque fuga, suscipit porro molestias quasi, officia dolor perferendis expedita repellendus fugiat labore excepturi ducimus debitis dolores.</p>

      </div>
    </>
  )
}

export default Home
