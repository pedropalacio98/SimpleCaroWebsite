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
                This Franco is being deployed automatically(?)
            </h3>
            <h3 style={{color: 'gray'}}>
                CERN is raising funds for this poor guy
            </h3>
        </header>
        <div className="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                 preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"></path>
            </svg>
        </div>
        <div style={{backgroundColor: "white",height: '100vh'}}>
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
            <img style={{height: '70vh'}} src={pedrito} alt="fireSpot"/>
        </div>
    </motion.div>
);
export default Dashboard;
