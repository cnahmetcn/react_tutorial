import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <a href="#/" onClick={() => navigate(-1)}>Geri Dön</a>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li onClick={() => navigate('contact')}>Contact Navi</li>
        </ul>
    </div>
  )
}

export default Menu