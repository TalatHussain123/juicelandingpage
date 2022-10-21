import React from 'react';
import img from '../Images/1.jpg';

function Home() {
  return (
    <>
    <div className='Home_img'><img src={img} height='600px'></img></div>
    <div className='Home_text'><h1>Connecting<br/> Retailers to Local<br/> Self Destributed<br/> Breweries</h1></div>
    <button className='Home_btn'>Get Started</button>
    </>
  )
}

export default Home