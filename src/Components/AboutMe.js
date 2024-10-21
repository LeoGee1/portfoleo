import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const About = () => {
    const swapref = useRef(null);
    const [flip, setFlip] = useState(null);

    const handleClick = () => {
        setFlip(true);

        if(flip) {
            const potraits = document.querySelector('.potraits');
            const description = document.querySelector('.description');
            const swap = swapref.current;

            potraits.classList.add('order-third');
            swap.classList.add('order-second');
            description.classList.add('order-first');

            setFlip(false);
        }

        if(!flip) {
            const potraits = document.querySelector('.potraits');
            const description = document.querySelector('.description');
            const swap = swapref.current;

            potraits.classList.remove('order-third');
            swap.classList.remove('order-second');
            description.classList.remove('order-first');
        }       
    }
   
    return ( 
        <div className="aboutme">
            <div className="potraits">
                <div className="boxes one"></div>
                <div className="boxes two"></div>
                <div className="boxes three"></div>
                <div className="boxes four"></div>
                <div className="boxes five"></div>
                <div className="boxes six"></div>
            </div>
            <div className="line" ref={swapref} onClick={handleClick}>
                 <FontAwesomeIcon className='dots' icon={faEllipsisVertical} />
            </div>
            <div className="description">
                <h2>A Software Developer with the right attitude for Software Development</h2>
                <h2>for the works of a man showeth his ability.</h2>
            </div>
        </div>
     );
}
 
export default About;