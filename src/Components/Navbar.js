import { useState, useRef } from 'react';
// import uo from './uo.svg';
import v2 from './V2.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Navbar = () => {
    const [activeLink, setActiveLink] = useState(1);
    const contactRef = useRef(null);
    const [flip, setFlip] = useState(null);

    const handleClick = (index) => {
        setActiveLink(index);
    }

   

    const contactClick = () => {
        setFlip(true);

        if (flip) {
            const socials = document.querySelectorAll('.soc');
            const cover = document.querySelector('.cover');

            socials.forEach(social => {
                social.classList.add('animate-brand');
            })
            cover.classList.add('cover-show');
            setFlip(false);
        }

        if (!flip) {
            const cover = document.querySelector('.cover');
            const socials = document.querySelectorAll('.soc');


            socials.forEach(social => {
                social.classList.remove('animate-brand');
            })
            cover.classList.remove('cover-show');

        }
    }



    return (
        <section className="nav-bar">
            <div className="nav-child portfolio-emblem">
                <img src={v2} className="uo-logo" alt="logo" />
            </div>

            <div className="nav-child main-menu">
                <Link to="/" className={activeLink === 1 ? "home active" : "home"} onClick={() => handleClick(1)}>HOME</Link>
                <Link to="/aboutme" className={activeLink === 2 ? "about active" : "about"} onClick={() => handleClick(2)}>ABOUT</Link>
                <Link to="/stack" className={activeLink === 3 ? "stack active" : "stack"} onClick={() => handleClick(3)}>STACK</Link>
                <Link to="/projects" className={activeLink === 4 ? "projects active" : "projects"} onClick={() => handleClick(4)}>PROJECTS</Link>
            </div>

            <div className="nav-child contacts">
                <div className='contact-name' ref={contactRef} onClick={contactClick}>CONTACT</div>
                <i className='cover'></i>
                <div className='contact-child'>
                    <a href="mailto:ucheleonard2000@gmail.com" target="_blank" rel="noopener noreferrer" className='gmail soc'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>

                    <a href="https://github.com/LeoGee1/" target="_blank" rel="noopener noreferrer" className='github soc'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://www.linkedin.com/in/uchenna-onyekwere/" target="_blank" rel="noopener noreferrer" className='linkedin soc'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>

            <div className="count-tab">
                <Link to="/" className={activeLink === 1 ? "count-active" : " "} onClick={() => handleClick(1)}>01</Link>
                <Link to="/aboutme" className={activeLink === 2 ? "count-active" : " "} onClick={() => handleClick(2)}>02</Link>
                <Link to="/stack" className={activeLink === 3 ? "count-active" : " "} onClick={() => handleClick(3)}>03</Link>
                <Link to="/projects" className={activeLink === 4 ? "count-active" : " "} onClick={() => handleClick(4)}>04</Link>
            </div>
        </section>
    );
}


export default Navbar;