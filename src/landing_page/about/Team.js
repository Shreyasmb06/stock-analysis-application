import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className="container">
      <div className="row text-center pt-5 border-top">
        <h2 className=" ">
          People
        </h2>
      </div>
      <div className="row text-muted  p-5" style={{lineHeight: "1.5", fontSize: "1rem"}}>
        <div className="col py-5 ps-5 text-center">
          <img src='./images/nithinKamath.jpg' alt='Nithin Kamath' style={{borderRadius: "100%", width: "60%", height: "70%"}} />
          <p className='mt-3 fs-5 text-dark'>Nithin Kamath</p>
          <p className='text-muted fs-6'>Founder & CEO</p>
        </div>
        <div className="col py-5 pe-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p> Connect on <Link to="/">Homepage</Link> /  <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
        </div>
      </div>
    </div>
    );
}

export default Team;