import Page from './components/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';
import Home from './components/pages/Home';
import ServingCounter from './components/pages/section-nutrition/ServingCounter';
import RecipeOC from './components/pages/section-nutrition/RecipeOC';

function App() {
return (
    <>
        <BrowserRouter>
            <div>
                <Page />
            </div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route path="/servingcounter" element={<ServingCounter />} />
                <Route path="/recipes" element={<RecipeOC />} /> 
            </Routes>
    </BrowserRouter >
        </>
    );
}

export default App;
