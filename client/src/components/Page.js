import React from 'react';
import Header from './pages/Header';
//import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Login';




export default function Page() {
    
    return (
        <div>
            <Header />
            
                <Login />
                {/* <Home /> */}
            
            <Footer />
        </div>
    )
}