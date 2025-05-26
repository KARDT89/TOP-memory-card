import React from 'react';

const Navbar = ({currentScore, bestScore}) => {
    return (
        <div className={'border w-[70%] h-[10%] mx-auto text-xl md:text-4xl lg:text-6xl font-semibold flex items-center justify-center gap-8 my-4 text-amber-800 rounded-xl'}>
            <p className={'text-gray-300'}>Score: {currentScore}</p>
            <p className={'text-gray-300'}>Best Score: {bestScore}</p>
        </div>
    );
};

export default Navbar;