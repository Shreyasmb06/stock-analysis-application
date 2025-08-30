import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container'>
            <div className='row p-5 text-center '>
                <h1 className='mt-5'>Open Zerodha account</h1>
                <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                <button className='btn btn-primary p-2 fs-5' style={{ margin: '0 auto',width:'20%' }}><Link to="/signup" className="text-light">Signup Now</Link></button>
            </div>
        </div>
    );
}

export default OpenAccount;