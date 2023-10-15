import LoginForm from './components/forms/LoginForm';
import Page from './components/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import RegisterForm from './components/forms/RegisterForm';
import { RecipeForm } from './components/forms/RecipeForm';

function App() {
    return (
        <>
        <div>
            <Page/>
        </div>
        
       <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/recipe" element={<RecipeForm />} />
                </Routes>
            </div>
        </BrowserRouter>
        </>
    );
}

export default App;
