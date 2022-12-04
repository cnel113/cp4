import React from "react";

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
                <h4>Quick Colors</h4>
                <button>About Us</button>
                <button>Affiliates</button>
                <button>Press & Media</button>
                <button>Customer Reviews</button>
            </div>
        </div>
        );
    }
}
export default Footer;
