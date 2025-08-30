import React from 'react';

function Stats() {
    return (  
        <div className='container mt-5 p-5'>
            <div className='row text-centercp-5'>
                <div className='col-md-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <div >
                        <h2 className='fs-4'>Join millions of satisfied customers</h2>
                        <p className='text-muted'>We have a proven track record of providing reliable and secure services to our users.</p>
                    </div>
                    <div >
                        <h2 className='fs-4'>No Compromise on Security</h2>
                        <p className='text-muted'>We prioritize the security of your data and transactions.</p>
                    </div>
                    <div >
                        <h2 className='fs-4'>The Zerodha Ecosystem</h2>
                        <p className='text-muted'>The Zerodha Ecosystem is designed to provide you with a seamless trading experience.</p>
                    </div>
                    <div >
                        <h2 className='fs-4'>Do More with Zerodha</h2>
                        <p className='text-muted'>We empower you to take control of your financial future with our innovative tools and resources.</p>
                    </div>

                </div>
                <div className='col-md-6 text-center p-5'>
                    <img src='./images/ecosystem.png' alt='Ecosystem' className='img-fluid' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className=''>
                        <a href='/ecosystem' className='text-decoration-none'>Explore the Zerodha <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/open-account' className='ms-4 text-decoration-none'>Open an Account <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Stats;