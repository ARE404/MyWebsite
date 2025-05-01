import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/AboutMe.jsx';
import NavBar from '../components/NavBar.jsx';
import Articles from '../pages/Articles.jsx';

const RouterView = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div style={{ paddingTop: '32px' }}>
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouterView;