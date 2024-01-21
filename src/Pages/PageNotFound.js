import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {

  return (
    <div>
        <Link  to='/'>
        <h3>We are sorry...</h3>
        <p>This page is currently unavailable...</p>
        </Link>
    </div>
  )
}


export default PageNotFound;