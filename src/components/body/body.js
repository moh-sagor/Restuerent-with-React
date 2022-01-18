import React from 'react';
import Menu from './menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import ErrorPage from './ErrorPage'
import { Routes, Route, Navigate } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/Contact" exact element={<Contact />} />
                {/* <Route render={() => <Navigate to="/" />} /> */}
                <Route path="*" exact element={<ErrorPage />} />
            </Routes>

        </div>
    );
}

export default Body;