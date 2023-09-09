import React from 'react'
import PageNavbar from '../Components/PageNavbar';
import { Link } from 'react-router-dom';


function Profile() {
  return (
    <div>
        <PageNavbar/>
      <h1>This is Proifle Page</h1>
      <Link to='/'>
      <button>Home</button>
      </Link>

    </div>
  )
}

export default Profile
