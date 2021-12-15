import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/Pages/App';

ReactDom.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
  }