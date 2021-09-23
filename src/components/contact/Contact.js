import React from 'react';
import {Element} from 'react-scroll';
import {IconButton} from '@material-ui/core';
import {Facebook,LinkedIn,Instagram} from '@material-ui/icons';
import './Contact.css';

 function Contact() {
    return (
        <Element className="contact" id="contact">
            <h2>CONTACT ME</h2>
            <div className="contact__container">
                <p>Mobile : <span>+46 734836883</span></p>
                <p>Email : <span>ghanacvino@gmail.com</span></p>
            <div className="contact__icons">
                <a href="https://www.linkedin.com/in/ghana-chandra-a46b6240/">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/ghana.chandra/">
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/ghanavinodhini/">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
            </div>
            </div>
        </Element>
    )
}

export default Contact;
