import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import LangContext from '../context/LangContext'


const Footer = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {lang} = useContext(LangContext);
  return (
    <div>
        <hr />
        Footer
        Aktif Tema: {theme}
        <br></br>
        Aktif Dil: {lang}
        <br />
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Footer