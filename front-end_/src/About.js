import React from 'react';
import founderImage from "./AbtImgs/founder.jpg"
import brushImage from "./AbtImgs/brushes.jpg"
import potteryImage from "./AbtImgs/pottery.jpg"
import classicalImage from "./AbtImgs/classical.jpg"
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div className="about-page">
      
      <h1>About Us</h1>
      <p className="subtitle">Art Discovery is a nonprofit organization commited to helping the world experience art</p>

      <div className="bio">
        <img src={founderImage}/>
        <p>Our founder, Jenny Mastovits, saw a problem in her small-town community. There was a lack of love for the arts! As she grew up, 
        she was enthralled by the fine art she saw in Florence, New York, and Paris. She also grew to love the work of small town artists she came across. 
        In an effort to bridge the gap, Jenny created Art Discovery to help give everyone a taste of art.  </p>
      </div>
      
      <div className="horizonal-container">
        <div className="feature tile">
          <h2>Experience Art Virtually</h2>
          <img src={classicalImage}/>
          <p className="subtitle">Everyone should have access to fine art. No matter what in-person opportunities are available, 
          everyone can experience the fine art of the Met on our explore page </p>
          <NavLink to="/explore" className="redirect-button">Explore</NavLink>
        </div>
        
        <div className="feature tile">
          <h2>Share Your Creations</h2>
          <img src={brushImage}/>
          <p className="subtitle">Many future masterpieces come from small-time artists, many of whom are in remote locations. 
          Get inspired or share your work on our community blog.</p>
          <NavLink to="/about" className="redirect-button">Share</NavLink>
        </div>
  
        <div className="feature tile">
          <h2>Community Events</h2>
          <img src={potteryImage}/>
          <p className="subtitle">We partner with local organizations in the Unites States to offer free and reduced cost art classes 
          to under priveldged individuals. Check your eligibility and sign up for events here.</p>
          <NavLink to="/about" className="redirect-button">Events</NavLink>
        </div>
      </div>
    </div>
  );
}

export default About; //Share and Events Buttons are fake links 
