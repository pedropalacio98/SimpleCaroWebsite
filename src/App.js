import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import {Routes, Route, Link, useLocation} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import {AnimatePresence} from "framer-motion";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
    const location = useLocation();
    return (
        <div>
            <NavBar />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
