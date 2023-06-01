import React, {useContext} from 'react'
import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";

import ThemeContext from "./context/ThemeContext";

const Container = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
        <ChangeTheme />
        <ChangeLang />
        <Footer />
    </div>
  )
}

export default Container