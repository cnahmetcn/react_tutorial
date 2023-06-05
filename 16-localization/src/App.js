import {IntlProvider, FormattedMessage} from 'react-intl'
import './App.css';
import { useState, useEffect } from 'react';

const messages = {
  'tr': {
    title: 'Merhaba Dünya',
    description: '{count} yeni mesajınız var.',
  },
  'en': {
    title: 'Hello World',
    description: 'You have {count} new messages.',
  }
}

function App() {
  const defaultLang = localStorage.getItem('locale') ? localStorage.getItem('locale') : navigator.language;
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    localStorage.setItem('locale', lang);
  }, [lang]);


  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id="title" /> 
        <p>
          <FormattedMessage id="description" values={{count: 5}}/>
        </p>
    <br /><br />
        <button onClick={()=>setLang('tr')}>TR</button>
        <button onClick={()=>setLang('en')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
