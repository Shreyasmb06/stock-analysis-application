import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='support'>
            <div className='pt-5 px-5' id='supportwrapper'>
                <h3 className='fs-4'>Support Portal</h3>
                <a href='/support'>track ticket</a>
            </div>
            <div className='row pb-5 mb-3 px-5' id='supporthero'>
                <div className='col p-5 mx-5'>
                    <h1 className='fs-3 text-light'>Search for an answer or browse help topics</h1>
                    <input type='text' placeholder='eg. how do i activate F&O' />
                    <a href='/support'>track ticket</a>
                    <a href='/support'>track ticket</a>
                    <a href='/support'>track ticket</a>
                    <a href='/support'>track ticket</a>
                </div>
                <div className='col p-5 '>
                    <h1 className='fs-3 text-light'>Featured</h1>
                    <ol className='text-light'>
                        <li><a href='/support'>track ticket</a></li>
                        <li><a href='/support'>track ticket</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;