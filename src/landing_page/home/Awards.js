import React from 'react';

function Awards() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-6 '>
                     <img src='./images/largestBroker.svg' alt='Largest Broker' className='img-fluid' />
                </div>
                <div className='col-6 '>
                    <h1 className='mb-4'>India's largest retail stock broker</h1>
                    <p className='mb-4'>Zerodha is India's largest retail stock broker with over 1.6 crore clients. We are the first to introduce discount broking in India, and we continue to lead the industry with innovative products and services.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Options Trading</li>
                                <li>Equity Delivery Trading</li>
                                <li>Mutual Funds</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Commodities Trading</li>
                                <li>Currency Trading</li>
                                <li>Fixed Deposits</li>
                            </ul>
                        </div>
                        <img src='./images/pressLogos.png' alt='Press Logos' className='img-fluid mt-4' style={{ maxWidth: '90%', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;