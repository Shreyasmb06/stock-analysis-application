import React from 'react';

function RightImage({ imageURL, productName, productDescription, learnMore }) {
    return (
         <div className='container border-top'>
            <div className='row  p-5'>

                    <div className='col-4 p-5 mt-5'>
                        <h1 className='mt-3 fs-3'>{productName}</h1>
                        <p className='mt-3'>{productDescription}</p>
                        <div className='mt-4'>
                            <a href={learnMore}>Learn More→</a>
                        </div>                        
                    </div>
                    <div className='col-1'></div>

                    <div className='col-6 p-5'>
                        <img src={imageURL} alt={productName} style={{ maxWidth: '100%'}} />
                    </div>
                    <div className='col-1'>
                        
                    </div>
            </div>
            
        </div>
    );
}

export default RightImage;