import logo from './logo.svg';
import './App.css';
import Slider from "./Slider/Slider.js";

function App() {
  return (
    <div className="homepage">
      <h1> Welcome to Art Discovery </h1>
      <p className="subtitle"> We are commited to helping everyone experience the joy of art </p>
      <img src="#"/>
      <Slider/>
      <h2>Experience Art from Around the World</h2>
      <p className="subtitle">You can enjoy art from</p>
      <h3>Napels</h3>
      <img src="#"/>
      <h3>Zimbabwe</h3>
      <img src="#"/>
      <h3>Mongolia</h3>
      <img src="#"/>
      <h3>and more!</h3>
      <img src="#"/>
      <h2>Dive in to discovery</h2>
      <p>Check out our explore page to scroll through the Met's art collection.</p>
      <p>Interested in a specific area of art? Our department's page has you covered.</p>
      <p>Want to know more Art Discovery? Check out our About page.</p>
    </div>
  );
}

export default App;
