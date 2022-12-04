import React from "react";
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return (  
        <div className='footer-container'>
            <div className='footer-list'>
                <h4>Searching Tools</h4>
                <button>Art History</button>
                <button>Art Departments</button>
                <button>Art Timeline</button>
            </div>
            <div className='footer-list'>
                <h4>Help</h4>
                <button>Customer Support</button>
                <button>FAQ's</button>
                <button href="https://github.com/cnel113/cp4.git">GIT HUB REPOSITORY</button>
            </div>
            <div className='footer-list'>
                <h4>Art Discovery</h4>
                <button></button>
                <button>Affiliates</button>
                <button>Press & Media</button>
                <button>Customer Reviews</button>
            </div>
        </div>
        );
    }
}
export default Footer;
