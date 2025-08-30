import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
         <div className='container'>
            <div className='row p-5 text-center '>
                <h1 className='mt-5'>404 Error Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link className='btn btn-primary p-2 fs-5' style={{ margin: '0 auto',width:'20%' }} to="/">Go Home</Link>
            </div>
        </div>
      );
}

export default NotFound;