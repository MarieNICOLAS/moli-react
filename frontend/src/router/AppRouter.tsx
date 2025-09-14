import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";

import HomePage from "../pages/HomePage";
import CircuitsPage from "../pages/CircuitsPage";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/circuits" element={<CircuitsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />}/>
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;