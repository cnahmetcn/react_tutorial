
import Container from "./Container";
import { LangContextProvider } from "./context/LangContext";
import {ThemeContextProvider} from "./context/ThemeContext";

import './stytles.css';

function App() {
  return (
    <div>
      <LangContextProvider>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
