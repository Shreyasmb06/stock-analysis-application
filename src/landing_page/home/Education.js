import React from 'react';

function Education() {
    return (
         <div className='container mt-5 p-5'>
            <div className='row  '>
                <div className='col-md-6 text-center  p-5'>
                    <img src='./images/education.svg' alt='Education' className='img-fluid' style={{ maxWidth: '90%',  }} />
                </div>
                <div className='col-md-6 p-5 '>
                    <h1 className='fs-2 mb-5'>Free and Open Source</h1>
                        <p className='text-muted'>Zerodha is built on open-source technologies, ensuring transparency and security.</p>
                        <a href='/ecosystem' className='text-decoration-none '>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <p className='text-muted mt-3'>Join our community of developers and contribute to the ecosystem.</p>
                        <a href='/ecosystem' className='text-decoration-none'>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
            </div>
           
        </div>
    );
}

export default Education;