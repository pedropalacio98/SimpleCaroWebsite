import Dashboard from "../Dashboard/Dashboard";
import Ideas from "../Ideas/Ideas";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import History from "../History/History";
import Pictures from "../Pictures/Pictures";
import Contact from "../Contact/Contact";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={Dashboard()}></Route>
                <Route exact path="/Dashboard" element={Dashboard()}></Route>
                <Route exact path="/Ideas" element={Ideas()}></Route>
                <Route exact path="/History" element={History()}></Route>
                <Route exact path="/Contact" element={Contact()}></Route>
                <Route exact path="/Pictures" element={Pictures()}></Route>

            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
