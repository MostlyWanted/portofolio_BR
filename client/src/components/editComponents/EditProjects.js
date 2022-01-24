import React from 'react';
import {Link} from 'react-router-dom';

const EditProjects = () => {
    return (
        <div className='edit'>
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form>
                            <h3 className="updated">Updated</h3>
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
                       <div className="btns">
                       <button>Update item</button>
                       <Link to="/admin"><button className='cancel-btn'>Cancel</button></Link>
                       </div>
                        
                    </form>
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default EditProjects
