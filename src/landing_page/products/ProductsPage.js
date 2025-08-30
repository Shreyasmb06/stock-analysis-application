import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';

function ProductsPage() {
    return (
        <div>
            <Hero />
            <LeftImage 
                imageURL='./images/kite.png'
                productName='Kite'
                productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
                tryDemo='/demo'
                learnMore='/learn-more'
                googlePlay='/google-play'
                appStore='/app-store'
            />
            <RightImage 
                imageURL='./images/console.png'
                productName='Console'
                productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
                learnMore='/learn-more'
            />

            <LeftImage 
                imageURL='./images/coin.png'
                productName='Coin'
                productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
                tryDemo='/demo'
                learnMore='/learn-more'
                googlePlay='/google-play'
                appStore='/app-store'
            />
            <RightImage 
                imageURL='./images/kiteconnect.png'
                productName='Kite Connect API'
                productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
                learnMore='/learn-more'
            />

            <LeftImage 
                imageURL='./images/varsity.png'
                productName='Varsity mobile'
                productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
                tryDemo='/demo'
                learnMore='/learn-more'
                googlePlay='/google-play'
                appStore='/app-store'
            />
            <p className='fs-4 text-muted text-center m-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </div>
    );
}

export default ProductsPage;