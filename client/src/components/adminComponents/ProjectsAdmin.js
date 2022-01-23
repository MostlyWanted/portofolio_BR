import React from 'react';

import {Link} from 'react-router-dom';

const ProjectsAdmin = () => {
    return (
        <div>
            <div className="same-component">
                <div className="same-form">
                    <form>
                        <h4>Projects components</h4>
                        <label htmlFor="text">Id</label>
                        <input type="text" name='product_id' required id="product_id" />
                       
                        <label htmlFor="text">Title</label>
                        <input type="text" name='title' required id="title" />
                        
                        <label htmlFor="text">Description</label>
                        <textarea type="text" name='description' required id="description" cols="30" rows="3" />

                        <div className="upload">
                            <input type="file" name="file" id="file_up" />
                            <div id="file_img">
                                <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                <span>X</span>
                            </div>
                        </div>
                        <button>Add item</button>
                        
                    </form>
                </div>

                <div className="same-item">
                    <div className="about-info">
                        <div className="projects-admin">
                    <div className="icons">
                    <Link to={`/editEducation`}><i className="fas fa-edit"></i></Link>
                <i className="fas fa-trash"></i>
                    </div>
                    {/* single project */}
                    <div className="single-project">
                        <div className="single-project-img"><img src="data:image/jpeg;base64,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" alt="" /></div>
                        </div>
                        <div className="single-project-info">
                            <h3>mountains</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi, blanditiis quibusdam dolorem officiis corrupti, omnis iste sed maiores nostrum doloremque sapiente similique delectus recusandae iusto, voluptatibus consectetur necessitatibus maxime!</p>
                        </div>
                        </div>
                        <h3 className="item-delete-tab"></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsAdmin
 