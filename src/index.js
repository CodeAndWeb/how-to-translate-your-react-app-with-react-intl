import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";

// polyfills - optional
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/de'; // Add locale data for your supported languages
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/de'; // Add locale data for your supported languages

import messages_de from "./translations/de.json";
import messages_fr from "./translations/fr.json";

const messages = {
    'de': messages_de,
    'fr': messages_fr
};

const language = "xx" ; //navigator.language.split(/[-_]/)[0];  // language without region code

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntlProvider locale={navigator.language} messages={messages[language]}>
            <App/>
        </IntlProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
