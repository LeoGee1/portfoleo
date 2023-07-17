import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGithub, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import VanillaTilt from 'vanilla-tilt';


const Stack = () => {
  const handleOverRef = useRef(null);


  useEffect(() => {
    const handleOver = handleOverRef.current;

    const cardsParent = document.querySelector('.stack-child');
    cardsParent.addEventListener('mouseover', handleOver);

    return () => {
        cardsParent.removeEventListener('mouseover', handleOver);
    };
  }, []);

  const cardsRef = useRef([]);
    let currentIndexRef = useRef(0);

    const cards = cardsRef.current;
    let currentIndex = currentIndexRef.current;

    const buttonIncrementClick = () => {
        if(currentIndex < cards.length-1) {
          currentIndex++;

          cards.forEach((card, index) => {
            card.style.display = index === currentIndex ? 'flex' : 'none';
          });
        }
      }

    const buttonDecrementClick = () => {
        if(currentIndex > 0) {
            currentIndex--;

            cards.forEach((card, index) => {
              card.style.display = index === currentIndex ? 'flex' : 'none';
              });
          }
          
    }  

  const handleOver = (e) => {
    if(e.target.classList.contains('cards')) {
        VanillaTilt.init(document.querySelectorAll('.cards'), {
                   max: 25,
                   speed: 400
               });
    }
  }

    return ( 
        <section className="stack slider-container">
            <div className="stack-child slider" onMouseOver={handleOver}>
                <div className="stack-child-one cards"  ref={(el) => (cardsRef.current[0] = el)}>
                    <div className='logo-parent stack-icons'>
                        <FontAwesomeIcon icon={faHtml5} className='html'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='css'/>
                    </div>
                    <h3 className='name'>HTML & CSS</h3>
                </div>
                <div className="stack-child-two cards" ref={(el) => (cardsRef.current[1] = el)}>
                    <FontAwesomeIcon icon={faGithub} className='git stack-icons'/>
                    <h3 className='name'>Github</h3>
                </div>
                <div className="stack-child-three cards" ref={(el) => (cardsRef.current[2] = el)}>
                    <FontAwesomeIcon icon={faJs} className='script stack-icons'/>
                    <h3 className='name'>JavaScript</h3>
                </div>
                <div className="stack-child-four cards" ref={(el) => (cardsRef.current[3] = el)}>
                    <FontAwesomeIcon icon={faReact} className='react stack-icons'/>
                    <h3 className='name'>React JS</h3>
                </div>
                <div className="stack-child-fifth cards fifth" ref={(el) => (cardsRef.current[4] = el)}>
                    <FontAwesomeIcon icon={faReact} className='react stack-icons'/>
                    <h3 className='name'>React Native</h3>
                </div>
            </div>
            <div className='button-parent'>
                <button onClick={buttonDecrementClick}><FontAwesomeIcon icon={faAngleLeft} className='arrow'/></button>
                <button onClick={buttonIncrementClick}><FontAwesomeIcon icon={faAngleRight} className='arrow'/></button>
            </div>
        </section>
     );
}
 
export default Stack;