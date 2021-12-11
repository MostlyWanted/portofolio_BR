import React from 'react';
import proj1 from '../../images/proj1.jpg';
import proj2 from '../../images/proj2.jpg';

function Projects(){
    return (
        <div className="main-container">
            <div className="projects">
                <h2 className="title">Projects</h2>
                    <div className="projects-center">

                    {/* single project */}
                    <div className="single-project">
                        <div className="single-project-img">
                            <img src={proj1} alt="" />
                        </div>
                        <div className="single-project-info">
                            <h3>Catch me if you can</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit, harum quidem in iste, molestias quasi nihil, repudiandae ex reiciendis provident tenetur doloremque perspiciatis magnam culpa impedit aspernatur. Quia, nisi.</p>
                        </div>
                    </div>
                    {/* single project */}
                    <div className="single-project">
                        <div className="single-project-img">
                            <img src={proj1} alt="" />
                        </div>
                        <div className="single-project-info">
                            <h3>Catch me if you can</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit, harum quidem in iste, molestias quasi nihil, repudiandae ex reiciendis provident tenetur doloremque perspiciatis magnam culpa impedit aspernatur. Quia, nisi.</p>
                        </div>
                    </div>
                    {/* single project */}
                    <div className="single-project">
                        <div className="single-project-img">
                            <img src={proj1} alt="" />
                        </div>
                        <div className="single-project-info">
                            <h3>Catch me if you can</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit, harum quidem in iste, molestias quasi nihil, repudiandae ex reiciendis provident tenetur doloremque perspiciatis magnam culpa impedit aspernatur. Quia, nisi.</p>
                        </div>
                    </div>
            
                    </div>
                
            </div>
        </div>
    )
}

export default Projects
