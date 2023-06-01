import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const ChangeTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme);
  return (
    <div>
        Aktif Tema: {theme}
        <br></br>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme