import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/AboutMe.jsx';

const RouterView = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterView;