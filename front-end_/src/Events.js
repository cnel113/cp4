import React from 'react';
import './Calendar.css';
import Calendar from 'react-calendar'; 
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Events = () => {
    const [date, setDate] = useState(new Date())
  return (
    <div className="events-page">
        
       <h1 className="header">React Calendar</h1>
       <div className="calendar-container">
         <Calendar onChange={setDate} value={date}/>
       </div>
       <div className="text-center">
          Selected date: {date.toDateString()}
       </div>
      
      <h1>Attend Local Events in Your Community</h1>
      <p className="subtitle">The best way to experience art is to make it yourself.</p>

      <div className="bio">
        <img src="#"/>
        <p>Check out our calendar of large events</p>
      </div>
      
      <div className="horizonal-container">
        <div className="feature tile">
          <h2>Free or Reduced Cost Classes</h2>
          <img src="#"/>
          <p className="subtitle">Everyone should have access to fine art. No matter what in-person opportunities are available, 
          everyone can experience the fine art of the Met on our explore page </p>
          <NavLink to="/explore" className="redirect-button">Explore</NavLink>
        </div>
        
        <div className="feature tile">
          <h2>Share Your Creations</h2>
          <img src="#"/>
          <p className="subtitle">Many future masterpieces come from small-time artists, many of whom are in remote locations. 
          Get inspired or share your work on our community blog.</p>
          <NavLink to="/about" className="redirect-button">Share</NavLink>
        </div>
  
        <div className="feature tile">
          <h2>Community Events</h2>
          <img src="#"/>
          <p className="subtitle">We partner with local organizations in the Unites States to offer free and reduced cost art classes 
          to under priveldged individuals. Check your eligibility and sign up for events here.</p>
          <NavLink to="/about" className="redirect-button">Events</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Events; //Share and Events Buttons are fake links 
