import React from 'react'
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => {

  return (
    <div className='not-found'>
        
        <h2>We are sorry...</h2>
        <p>This page is currently unavailable...</p>

        <Link  to='/'>
        <p>Go back to home page</p>
        </Link>
    </div>
  )
}


export default PageNotFound;