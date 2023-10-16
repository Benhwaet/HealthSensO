// Might not be necessary if using React-Router-Dom

import React, {useState} from 'react';
import Header from '../Header/Header';
import Login from '../pages/Login/Login';
import Home from './Home';
import Nutrition from './Nutrition/Nutrition';
import ServingCounter from '../Counters/ServingCounter';
import RecipeOC from './Recipes/RecipeOC';
// import Log from './Logbook/Logbook';
import Footer from '../Footer/Footer';


export default function Page() {
    const [currentPage, setCurrentPage] = useState('ServingCounter');
    
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
        if (currentPage === "Recipes") {
            return <RecipeOC/>;
        }
        if (currentPage === "ServingCounter") {
            return <ServingCounter/>;
        }
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