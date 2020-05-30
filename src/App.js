import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout'
import HomePage from './components/HomePage/HomePage';
import Cart from './containers/Cart/Cart';

const  App = () => {
    
        return (
            <BrowserRouter>
             <div>
                <Layout>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/-cart" component={Cart} />
                </Layout>
             </div>
            </BrowserRouter>
        );
    
}

export default App;

















