import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                        <img src={logo} alt=''></img>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                </div>
            </section>
        </footer>
    );
};

export default Footer;