import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
    render () {
        return (  
        <div className='footer-container'>
            <div className='footer-list'>
                <h4>Designer Tools</h4>
                <a href="">Color Wheel</a>
                <a href="">Tips & Tricks</a>
                <a href="">Color Conversions</a>
            </div>
            <div className='footer-list'>
                <h4>Help</h4>
                <a href="">Customer Support</a>
                <a href="">FAQ's</a>
                <a href="https://github.com/cnel113/cp4.git">GIT HUB REPOSITORY</a>
            </div>
            <div className='footer-list'>
                <h4>Quick Colors</h4>
                <a href="">About Us</a>
                <a href="">Affiliates</a>
                <a href="">Press & Media</a>
                <a href="">Customer Reviews</a>
            </div>
        </div>
        );
    }
}
export default Footer;
