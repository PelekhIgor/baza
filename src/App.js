import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/ProjectsPage/Projects";
import Partners from "./pages/PartnersPage/Partners";
import Links from "./pages/LinksPage/Links";
import Contacts from "./pages/ContactsPage/Contacts";

function App() {
    return (
        <Router>
            <>
                <Header />

                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;