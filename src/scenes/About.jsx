import React from 'react';
import LineGradient from '../components/LineGradient';

const About = () => {
    return (
        <div className='my-24'>
            <div>
                <p className="font-playfair font-semibold text-4xl text-center">
            <span className="text-red">ABOUT </span>ME
          </p>
          <div className="flex justify-center my-5">
            <LineGradient width="w-[120px]" />
          </div>
            </div>
        </div>
    );
};

export default About;