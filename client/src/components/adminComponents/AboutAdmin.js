import React from 'react';
import {Link} from 'react-router-dom';

const AboutAdmin = () => {
    return (
        <div className='same-component'>
            <div className="same-form">
                <form>
                    <h4>About component</h4>
                    <label htmlFor="text">About</label>
                    <textarea name="textarea" cols="30" rows="3"></textarea>
                    <button type="submit">Add item</button>

                </form>
            </div>

            <div className="same-item">
                <div className="about-info">
                    <div className="icons">
                        <Link to={`/edit`}><i className="fas fa-edit"></i></Link>
                        <i className="fas fa-trash"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam saepe quaerat, provident aut adipisci repellendus facere soluta itaque a sequi optio. Cum, fugiat iusto similique quis animi perferendis neque?</p>
                </div>


            </div>

                <h3 className='item-delete-tab'>item deleted</h3>

        </div>
    )
}

export default AboutAdmin
