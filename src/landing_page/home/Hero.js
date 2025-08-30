import React from 'react';

function Hero() {
    return (
        <div className='container mb-5'>
            <div className='row p-5 text-center '>
                <img src='./images/homeHero.png' alt='Hero' className='hero-image mb-5' />
                <h1 className='mt-5'>Open a free demat and trading account online</h1>
                <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                <button className='btn btn-primary p-2 fs-5' style={{ margin: '0 auto',width:'20%' }}>Signup Now</button>

            </div>
        </div>
    );
}

export default Hero;