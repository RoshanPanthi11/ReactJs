import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurtusung Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae id, quod, nobis quae debitis enim deleniti inventore cumque tempora sed distinctio officiis nam neque quibusdam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae id, quod, nobis quae debitis enim deleniti inventore cumque tempora sed distinctio officiis nam neque quibusdam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae id, quod, nobis quae debitis enim deleniti inventore cumque tempora sed distinctio officiis nam neque quibusdam.</p>
        </div>
    </div>
  )
}

export default About