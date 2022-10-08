import Dashboard from "../Dashboard/Dashboard";
import Ideas from "../Ideas/Ideas";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={Dashboard()}></Route>
                <Route exact path="/dashboard" element={Dashboard()}></Route>
                <Route exact path="/Ideas" element={Ideas()}></Route>
                <Route path="/second"></Route>
                <Route path="/third"></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
