import React from 'react';

function LeftImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container border-top'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
                <div className='col-1'></div>

                <div className='col-4 p-5'>
                    <h1 className='mt-3 fs-3'>{productName}</h1>
                    <p className='mt-3'>{productDescription}</p>
                    <div className='mt-4'>
                        <a href={tryDemo} className='me-5'>Try Demo→</a>
                        <a href={learnMore}>Learn More→</a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay} className='me-2'><img src='./images/googlePlayBadge.svg' alt='Google Play' /></a>
                        <a href={appStore}><img src='./images/appStoreBadge.svg' alt='App Store' /></a>
                    </div>
                     
                </div>
            </div>
            
        </div>
    );
}

export default LeftImage;