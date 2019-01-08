import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/App'
import { ProductProvider } from './components/Common/Context';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
    , document.getElementById('root'))
