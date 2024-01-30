import React from 'react'
import './Hero.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
         <div className="hero-title">
          <h1>
            Discover <br/> More Suitable <br /> Services for your Car
          </h1>
          <div className="flexColStart hero-des">
          <span >Find variety of Services.</span>
            <span >Get your car in a original state</span></div>
            <div className="flexCenter search-bar">
              <LocationOnIcon className="location" />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            
         </div>
        </div>
        <div className="flexCenter hero-right">
        <div className="image-container">
          <img src="https://drdriving.in/wp-content/uploads/2022/12/Cadillac-Escalade.webp" alt="" />


        </div>

        </div>
      </div>
    </section>
  )
}

export default Hero