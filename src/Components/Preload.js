import v2 from './V2.svg'


const Preload = ({showPreload}) => {
    const preloaderClassName = showPreload ? 'pre-load' : 'pre-load move';
    return ( 
        <div className={preloaderClassName} id='preLoad'>
            <div className="nav-child portfolio-emblem-pre">
                <img src={v2} className="preload-logo" alt="logo" />
            </div>
            <h1>
                Hello, <br/> I'm Onyekwere Uchenna <span className='dot'>.</span>
            </h1>
        </div> 
     );
}
 
export default Preload;