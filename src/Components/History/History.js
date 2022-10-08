import React from 'react';
import {motion} from "framer-motion";
import {Grid, Paper} from "@mui/material"

const History = () => (
    <motion.div className="App"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
    >
        <header className="App-header">

                        <h3 >Sep 14, 2022: First Commit</h3>
                        <h3>Sep 27, 2022: Deployed on RPi</h3>
                        <h3>Oct 02, 2022: Implemented CI</h3>
                        <h3>Oct 08, 2022: Drafted Ideas</h3>
                   
        </header>
    </motion.div>
);
export default History;

