import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className=''>
            <nav class="navbar navbar-expand-lg bg-body-light border-bottom d-flex px-5 ">
  <div class="container-fluid">
    <Link class="navbar-brand ms-3" to="/"><img src="./images/logo.svg" alt="Zerodha" className="img-fluid" style={{ maxWidth: '25%' }} /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     
      <form class="" role="search">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/support">Support</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="#"><i class="fa fa-bars" aria-hidden="true"></i></Link>
        </li>
        
      </ul>
       
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;