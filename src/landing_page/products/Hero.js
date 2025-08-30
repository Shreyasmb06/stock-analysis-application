import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center p-5'>
                <h1 className='fs-2'>Zerodha Products</h1>
                <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a href='/products'>investment offerings → </a></p>
            </div>
        </div>
    );
}

export default Hero;