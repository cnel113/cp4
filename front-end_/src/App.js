import './App.css';
import Slider from "./Slider/Slider.js";
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
      <img src="#"/>
      <Slider/>
      <h2>Experience Art from Around the World</h2>
      <div className="feature-container">
        <p className="subtitle">You can enjoy art from</p>
        <div className="feature">
          <h3>Napels</h3>
          <img src={napelsImage}/>
        </div>
        <div className="feature">
          <h3>Zimbabwe</h3>
          <img src={zimbabweImage}/>
        </div>
        <div className="feature">
          <h3>Japan</h3>
          <img src={japanImage}/>
        </div>
        <div className="feature">
          <h3>and more!</h3>
          <img src={moreImage}/>
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
