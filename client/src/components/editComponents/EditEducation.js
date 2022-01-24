import React from 'react';
import {Link} from 'react-router-dom';

const EditEducation = () => {
    return (
        <div className='edit'>
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form>
                            <h3 className='updated'>Updated</h3>
                            <h4>Education component</h4>
                            <label htmlFor="text">Education</label>
                            <input type="text" />
                            <div className="btns">
                                <button type="submit">Update item</button>
                                <Link to="/admin"><button className='cancel-btn'>Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditEducation
