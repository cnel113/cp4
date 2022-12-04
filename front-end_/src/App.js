import './App.css';
//import Slider from "./Slider/Slider.js";
import paintbrushesImage from "./HomeImgs/paintbrushes.jpg"
import abstractartImage from "./HomeImgs/abstractart.jpg"
import streetartImage from "./HomeImgs/streetart.jpg"
import japanImage from "./HomeImgs/japan.jpg"
import zimbabweImage from "./HomeImgs/zimbabwe.jpg"
import napelsImage from "./HomeImgs/napels.jpg"
import moreImage from "./HomeImgs/more.jpg"
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="homepage">
      <h1> Welcome to Art Discovery </h1>
      <p className="subtitle"> We are commited to helping everyone experience the joy of art </p>
      <div className="image-trio-container">
        <img src={abstractartImage} alt="decorative abstract art"/>
        <img src={paintbrushesImage} alt="paintbrushes"/>
        <img src={streetartImage} alt="decorative street art portrait"/>
      </div>
      <h2>Experience Art from Around the World</h2>
      <div className="feature-container">
        <div className="feature">
          <h3>Napels</h3>
          <img src={napelsImage} alt="classical painting of an angel"/>
        </div>
        <div className="feature">
          <h3>Zimbabwe</h3>
          <img src={zimbabweImage} alt="colorful hand-woven African discs"/>
        </div>
        <div className="feature">
          <h3>Japan</h3>
          <img src={japanImage} alt="japanese characters on bags" />
        </div>
        <div className="feature">
          <h3>and more!</h3>
          <img src={moreImage} alt="computer generated art of hand with ring around it"/>
        </div>
      </div>
      
      <h2>Dive in to discovery</h2>
      <p>Check out our <NavLink to="/explore" className="inline-link">explore page</NavLink>to scroll through the Met's art collection.</p>
      <p>Interested in a specific area of art? Our <NavLink to="/departments" className="inline-link">departments</NavLink> page has you covered.</p>
      <p>Want to know more about Art Discovery? Check out our <NavLink to="/about" className="inline-link">about page.</NavLink></p>
    </div>
  );
}

export default App;
