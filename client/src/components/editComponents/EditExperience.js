import React from 'react';
import {Link} from 'react-router-dom';

const EditExperience = () => {
    return (
        <div className='edit'>
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form>
                            <h3 className='updated'>Updated</h3>
                            <h4>Experience Component</h4>
                            <label htmlFor="text">Experience</label>
                            <input type="text" />
                            <div className="btns"><button type='submit'>Update Item</button>
                            <Link to='/admin'></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditExperience
