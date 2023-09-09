import React from 'react'
import PageNavbar from '../Components/PageNavbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Profile() {
  return (
    <div>
        <PageNavbar/>
      <Link to='/'>
      <button>Home</button>
      </Link>
      <h1>This is Proifle Page</h1>

     <Link to='/contact'>
      <Button variant="success">Contact Page</Button>
      </Link>
    </div>
  )
}

export default Profile
