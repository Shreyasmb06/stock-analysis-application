import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container border-top">
      <div className="row  p-5 text-center">
        <h1 className="mt-3 fs-3 text-muted">The Zerodha Universe</h1>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/zerodhaFundhouse.png"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%" , height: '60px' }}

          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/sensibullLogo.svg"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%", height: '60px' }}
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/smallcaseLogo.png"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%", height: '60px' }}
          />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/dittoLogo.png"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%" , height: '60px' }}

          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/goldenpiLogo.png"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%", height: '60px' }}
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5" style={{fontSize: ".8rem"}}>
          <img
            src="./images/streakLogo.png"
            alt="Universe 1"
            className="img-fluid"
            style={{ maxWidth: "80%", height: '60px' }}
          />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className='btn btn-primary p-2 fs-6 my-5' style={{ margin: '0 auto',width:'20%' }}><Link to="/signup" className="text-light">Signup Now</Link></button>

      </div>
    </div>
  );
}

export default Universe;
