import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
    
    <div className="flexCenter paddings innerWidth h-container">
        <img src="logo.png" alt="car" width={100}/>
        <div className="flexCenter h-menu">
            <a href="#requests">Requests</a>
            <a href="">Our Value</a>
            <a href="#contactus">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
                <a href="">contact</a>
            </button>



        </div>
        </div>
    </section>
  )
}

export default Header