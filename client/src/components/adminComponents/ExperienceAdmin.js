import React from 'react';
import {Link} from 'react-router-dom';
import './admin.css'

const ExperienceAdmin = () => {
    return (
        <div className='same-component'>
            <div className="same-form">
                <form>
                    <h4>Experience Component</h4>
                    <label htmlFor="text">Experience</label>
                    <input type="text"  />
                    <button type="submit">Add item</button>
                </form>
            </div>

            <div className="same-item">
                <div className="about-info">
                    <div className="same-admin">
                    <div className="icons">
            <Link to={`/editExperience`}><i className="fas fa-edit"></i></Link>
                        <i className="fas fa-trash"></i>
            </div>
            {/* single experience */}
            <div className="single-experience">
                <p>designer</p>
            </div>
            <h3 className='item-delete-tab'></h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExperienceAdmin
