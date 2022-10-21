import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';

function Navbar() {
  return (
    <div className='Footer_Main'>
      <div className='Navbar'>

        <ul className='Header'>
          <li className='link'>
            <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold' }} className='Header_heading'>Home</Link></li>
          <li className='link'>
            <Link to='/Contact' style={{ textDecoration: 'none', fontWeight: 'bold' }} className='Header_heading'>Contact</Link></li>
          <li className='link'>
            <Link to='/Login' style={{ textDecoration: 'none', fontWeight: 'bold' }} className='Header_heading'>Login</Link></li>
        </ul >

        <div className='Routing'>
          <Route path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Login' component={Login} />
        </div>
      </div>
    </div>
  )
}

export default Navbar