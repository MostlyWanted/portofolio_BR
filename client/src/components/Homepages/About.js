import React,{useContext} from 'react';
import { DataContext } from '../context/GlobalContext';

const About = () => {


    const state = useContext(DataContext);

    return (
        <div className="main-container">
            <div className="about">
                <h2 className="title">
                    about
                </h2>


                {/* about */}
                <div className="about-info">
                    <p>
                        Hello everyone, my name is Bijan Rajaie and I am a developer yooohooo
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
