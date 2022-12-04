import './Calendar.css';
import Calendar from 'react-calendar'; 
import { useState} from 'react';
import classImg from "./EventsImgs/classes.jpg";
import exhibitionImg from "./EventsImgs/exhibition.jpg"; 
import kidImg from "./EventsImgs/kids.jpg";


const Events = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className="events-page">
    
      <h1>Attend Local Events in Your Community</h1>
      <p className="subtitle">The best way to experience art is to make it yourself.</p>
      <p>Check out our calendar of large events</p>
      
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
        <p>Selected date: {date.toDateString()}</p>
      </div>
      
        <div className="feature">
          <h2>Free or Reduced Cost Classes</h2>
          <img src={classImg} alt="adults in a class"/>
          <p className="subtitle">Qualifying individuals get professional art training for free</p>
          <p>If you want to learn how to create art, you should be able to regardless of your circumstance. 
          In select cities we offer free or subsidized classes for people who are low-income, disabled, or have other needs.</p>
          <button className="inline-link">See Availability</button>
        </div>
        
        <div className="feature">
          <h2>Community Exhibitions</h2>
          <img src={exhibitionImg} alt="sleek art exhibition"/>
          <p className="subtitle">Artists have the opportunity to share art in their local areas.</p>
          <p>Small-town artists and those in less developed areas often lack opportunties for exposure. 
          We solve this by hosting exhibitions across the world where artists can display their art and compete for prizes.</p>
          <button className="inline-link">Dates & Times</button>
        </div>
  
        <div className="feature">
          <h2>Children's Events</h2>
          <img src={kidImg} alt="child holding crayons"/>
          <p className="subtitle">Kids get the opportunity to develop their love for art with hands on experience.</p>
          <p>When it comes to art, you can't leave out the kids. We support budding artists with 
          our low-priced curriculums. With supplies and engaging video lessons your kids can explore the world of art.</p>
          <button className="inline-link">Products & Pricing</button>
        </div>
    </div>
  );
};

export default Events; //Share and Events Buttons are fake links 
