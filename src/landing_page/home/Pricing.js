import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5 '>
            <div className='row  '>
                <div className='col-4 p-3'>
                <h1 className='mb-3'>Unbeatable Pricing</h1>
                <p className='text-muted'>Get the best value for your money with our competitive pricing plans.</p>
                <a href='/open-account' className='text-decoration-none'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2'>

                </div>
                <div className='col-6 p-3'>
                    <div className='row text-center '>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>free equity and delivery trading</p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p>Equity and delivery trading</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
}

export default Pricing;