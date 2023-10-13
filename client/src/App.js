import LoginForm from './components/Form/LoginForm';
import Page from './components/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import RegisterForm from './components/Form/RegisterForm';
import { RecipeForm } from './components/Form/RecipeForm';

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
