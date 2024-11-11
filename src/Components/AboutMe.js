
import { useRef, useState } from 'react';

const About = () => {
    // const swapref = useRef(null);
    // const [flip, setFlip] = useState(null);

    // const handleClick = () => {
    //     setFlip(true);

    //     if(flip) {
    //         const potraits = document.querySelector('.potraits');
    //         const description = document.querySelector('.description');
    //         const swap = swapref.current;

    //         potraits.classList.add('order-third');
    //         swap.classList.add('order-second');
    //         description.classList.add('order-first');

    //         setFlip(false);
    //     }

    //     if(!flip) {
    //         const potraits = document.querySelector('.potraits');
    //         const description = document.querySelector('.description');
    //         const swap = swapref.current;

    //         potraits.classList.remove('order-third');
    //         swap.classList.remove('order-second');
    //         description.classList.remove('order-first');
    //     }       
    // }
   
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
            <div className="description">
                <h2 className='description-child'>
                    Curious about me? I'm a self-taught front-end developer who’s had the good fortune of some professional mentorship. With hands-on experience, I specialize in bringing designs to life in fully interactive, smooth webflows. My skills grow daily! think of me as the software update you actually look forward to! I’m always up for tasks that keep me on my toes and push me to get even better at my craft.
                </h2>
            </div>
        </div>
     );
}
 
export default About;