import React from "react";

class Footer extends React.Component {
    render () {
        return (  
        <div className='footer-container'>
            <div className='footer-list'>
                <h4>Searching Tools</h4>
                <a href="">Art History</a>
                <a href="">Art Departments</a>
                <a href="">Art Timeline</a>
            </div>
            <div className='footer-list'>
                <h4>Help</h4>
                <a href="">Customer Support</a>
                <a href="">FAQ's</a>
                <a href="https://github.com/cnel113/cp4.git">GIT HUB REPOSITORY</a>
            </div>
            <div className='footer-list'>
                <h4>Quick Colors</h4>
                <a href="/About.js">About Us</a>
                <a href="">Affiliates</a>
                <a href="">Press & Media</a>
                <a href="">Customer Reviews</a>
            </div>
        </div>
        );
    }
}
export default Footer;
