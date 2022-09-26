import logo from './logo.svg';
import './App.css';
import {FormattedMessage} from "react-intl";
import React from "react";


function App() {

    const richText = {
        code: chunks => <code>{chunks}</code>,
        b: chunks => <b>{chunks}</b>,
        it: chunks => <it>{chunks}</it>,
        em: chunks => <em>{chunks}</em>,
        strong: chunks => <strong>{chunks}</strong>,
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <FormattedMessage id="app.text"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload. Now with <b>{what}</b>!"
                                      description="Welcome header on app main page"
                                      values={{
                                          what: 'react-intl',
                                          ...richText
                                      }}
                    />
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id="app.learn-react-link"
                                      defaultMessage="Learn React"
                                      description="Link on react page"/>
                </a>
            </header>
        </div>
    );
}

export default App;
