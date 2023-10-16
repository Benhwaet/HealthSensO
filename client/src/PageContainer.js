// // Might not be necessary if using React-Router-Dom

// import React, {useState} from 'react';
// import Header from './components/Header/Header';
// import Login from './components/pages/Login/Login';
// import Home from './components/pages/Home';
// import Nutrition from './components/pages/Nutrition/Nutrition';
// import ServingCounter from './components/Counters/ServingCounter';
// import RecipeOC from './components/pages/Recipes/RecipeOC';
// // import Log from './Logbook/Logbook';
// import Footer from './components/Footer/Footer';


// export default function Page() {
//     const [currentPage, setCurrentPage] = useState('Login');
    
//     const renderPage = () => {
//         if (currentPage === "Login") {
//             return <Login />;
//         }
//         if (currentPage === "Home") {
//             return <Home />;
//         }
//         if (currentPage === "Nutrition") {
//             return <Nutrition/>;
//         }
//         if (currentPage === "Recipes") {
//             return <RecipeOC/>;
//         }
//         if (currentPage === "ServingCounter") {
//             return <ServingCounter/>;
//         }
//         // if (currentPage === "Log") {
//         //     return <Log/>;
//         // }
//     }

//         const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>
//             <Header/>
            
//                {renderPage()}
            
//             <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
//         </div>
//     )
// }