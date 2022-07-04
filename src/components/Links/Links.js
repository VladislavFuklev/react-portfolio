import React from "react";
import {FaInstagram, FaFacebookF, FaTwitter, FaGithub} from 'react-icons/fa';
import './links.scss'


export const Links = () => {
    return(
        <div className="icons">
            <a href={'https://github.com/VladislavFuklev'} target='_blank'><FaGithub className="icons-item"/></a>
            <a href={'https://www.instagram.com/fucklevv/'} target='_blank'><FaInstagram className="icons-item"/></a>
            <a href={'https://twitter.com/?lang=ru'} target='_blank'><FaTwitter className="icons-item"/></a>
            <a href={'https://www.facebook.com/'} target='_blank'><FaFacebookF className="icons-item"/></a>
        </div>
    )
}