import React from 'react';
import './Dashboard.css';
import logo from "../../logo.svg";
import pedrito from "../../pedro.jpg";
import {motion} from "framer-motion";

const Dashboard = () => (
    <motion.div className="App"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
    >
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h3>
                This project is being deployed automatically(?)
            </h3>
            <h3 style={{color: 'gray'}}>
                CERN is raising funds for this poor guy
            </h3>
        </header>
        <div>
            <div>
                <h1 style={{margin: 0}}>
                    We introduce you:
                </h1>
                <h1> Pedro Palacio</h1>
                <p style={{fontSize: 16}}>More info on how to donate soon..</p>
                {new Date().toLocaleTimeString()}
            </div>
        </div>
        <img src={pedrito} alt="fireSpot"/>
    </motion.div>
);
export default Dashboard;
