import React from 'react';
import CircleEl from './elements/CircleElement';
import Header from './pages/Header';
import Footer from './pages/Footer';

export default function Page() {
    return (
        <>
            <Header />
            <main style={{ width: '100%', display: 'block', marginBlock: '5% 5%' }}>
                    <div><CircleEl /></div>
                    <div><CircleEl /></div>
            </main>
            <Footer />
        </>
    )
}