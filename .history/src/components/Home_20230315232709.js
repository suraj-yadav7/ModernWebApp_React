import React from 'react';
import vg from "./Assets/bg"

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
    </>
  )
}

export default Home
