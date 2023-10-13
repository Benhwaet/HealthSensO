import React, {useState} from 'react';
import Header from './pages/Header';
import Login from './pages/Login';
import Home from './Home';
import Nutrition from './pages/Nutrition';
// import Recipes from './pages/Recipes';
// import Sleep from './pages/Sleep';
// import Log from './pages/Log';
import Footer from './pages/Footer';


export default function Page() {
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        if (currentPage === "Login") {
            return <Login />;
        }
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "Nutrition") {
            return <Nutrition/>;
        }
        // if (currentPage === "Recipes") {
        //     return <Recipes/>;
        // }
        // if (currentPage === "Sleep") {
        //     return <Sleep/>;
        // }
        // if (currentPage === "Log") {
        //     return <Log/>;
        // }
    }

        const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header/>
            
               {renderPage()}
            
            <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}