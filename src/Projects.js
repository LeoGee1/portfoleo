const Projects = () => {
    return (
        <div className="projects">
            <div className="project-square">
                <div className="portfoleo squares">
                    <div className="section-one"></div>

                    <div className="section-two">
                        <div className="first-sect"></div>
                        <h3 className="second-sect"><a href = "/" className="port">Portfoleo</a> A site showing my works and ones to come, you're right on it.</h3>
                    </div>

                </div>

                <div className="in-tracker squares">
                    <div className="section-one"></div>

                    <div className="section-two">
                        <h3 className="second-sect"><a href = "https://leogee1.github.io/currencyconverter/" target="_blank" rel="noopener noreferrer" className="port">Currency Converter</a> A simple web-app for coverting currencies, sikena.</h3>
                    </div>

                </div>

                <div className="curr-converter squares">
                    <div className="section-one"></div>

                    <div className="section-two">
                        <h3 className="second-sect"><a href = "https://leogee1.github.io/inventorytracker/" target="_blank" rel="noopener noreferrer" className="port">Inventory tracker</a> A midway web-app for tracking inventories, like so.</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;