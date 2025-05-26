import React from 'react';

const Navbar = ({currentScore, bestScore}) => {
    return (
        <div className={'border w-[70%] h-[10%] mx-auto text-xl md:text-4xl lg:text-6xl flex items-center justify-center gap-8 my-4'}>
            <p>Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
};

export default Navbar;