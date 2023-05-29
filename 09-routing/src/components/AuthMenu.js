import React from 'react'
import { Link } from 'react-router-dom'

const AuthMenu = () => {
  return (
    <div>
        <ul className='menu'>
            <li><Link to='/auth/login'>Giriş Yap</Link></li>
            <li><Link to='/auth/register'>Kayıt Ol</Link></li>
        </ul>
    </div>
  )
}

export default AuthMenu