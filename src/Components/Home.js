import { useEffect, useState, useRef } from "react";
import "./AnimateCircle.css";


const Home = ({clockHasFadedIn, setClockHasFadedIn, setShowPreload}) => {
    const [loaded, setLoaded] = useState(false);
    const targetRef = useRef();
    const eggsDisplaySwitchRef = useRef(null);

    useEffect(() => {
        setShowPreload(false)    
        setLoaded(true);
        const targetElement = targetRef.current;

        if (!clockHasFadedIn && loaded) {
            targetElement.classList.add('fade');
            setClockHasFadedIn(true);
        }
        if (loaded){
            let lastEgg;
            const eggs = document.querySelectorAll('.eggs');

            const eggsDisplay = () => {
                let index;
                let egg;
               do {
                index = Math.floor(Math.random() * eggs.length);
                egg = eggs[index];
               } while (egg === lastEgg);

                lastEgg = egg;
                return egg;
            }
            eggsDisplaySwitchRef.current = setInterval(() => {
                const egg = eggsDisplay();            
                egg.classList.add('appear');

                 setTimeout(() => {
                egg.classList.remove('appear');
                
               }, 8000);
            }, 7800);


            return () => {
                clearInterval(eggsDisplaySwitchRef.current);
            }
            
        }
        
    }, [loaded, clockHasFadedIn, setClockHasFadedIn, setShowPreload]);




    return (
        <section className="home">
            {loaded && <div className="home-page">
                <div className="accolades">
                    <h1 className="goal">GOAL-ORIENTED</h1>
                    <h1 className="optim">OPTIMISTIC</h1>
                    <h1 className="driv">DRIVEN</h1>
                </div>
                <div className="circle-block">
                    <div className= "circle" ref = {targetRef}>
                        <ul>
                            
                        <li className="letters" style={{'--i': -5}}><span>U</span></li>
                        <li className="letters" style={{'--i': -4}}><span>C</span></li>
                        <li className="letters" style={{'--i': -3}}><span>H</span></li>
                        <li className="letters" style={{'--i': -2}}><span>E</span></li>
                        <li className="letters" style={{'--i': -1}}><span>N</span></li>
                        <li className="letters" style={{'--i': 0}}><span>N</span></li>
                        <li className="letters" style={{'--i': 1}}><span>A</span></li>
                        <li className="letters" style={{'--i': 2}}><span>.</span></li>
                        <li className="letters" style={{'--i': 3}}><span>O</span></li>
                        <li className="letters" style={{'--i': 4}}><span>N</span></li>
                        <li className="letters" style={{'--i': 5}}><span>Y</span></li>
                        <li className="letters" style={{'--i': 6}}><span>E</span></li>
                        <li className="letters" style={{'--i': 7}}><span>K</span></li>
                        <li className="letters" style={{'--i': 8}}><span>W</span></li>
                        <li className="letters" style={{'--i': 9}}><span>E</span></li>
                        <li className="letters" style={{'--i': 10}}><span>R</span></li>
                        <li className="letters" style={{'--i': 11}}><span>E</span></li>
                        <li className="letters" style={{'--i': 12}}><span> </span></li>

                        </ul>
                    </div>
                </div>
                <div className="easter-eggs" >
                    <div className="eggs">It takes 24 seconds for a complete cycle of this clock</div>
                    <div className="eggs">I'm a self taught developer with professional guidiance</div>
                    <div className="eggs">smart work is the combimation of hard work and brain work</div>
                    <div className="eggs">This portfolio and its creator gets better every week</div>
                </div>
               
            </div>}
        </section>
    );
}

export default Home;