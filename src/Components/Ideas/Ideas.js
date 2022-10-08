import React from 'react';
import {motion} from "framer-motion";

const Ideas = () => (
    <motion.div className="App"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
    >
        <header className="App-header">
            <h3>
                These are our current ideas: 
            </h3>
            <ol style={{color: 'gray'}}>
                <li>Blog explore CERN surroundings</li> 
                <li>Plants development</li> 
                <li>Blog how we will run sub 20 5k</li> 
                <li>Blog living with SN</li> 
                <li>Food we have cooked and tried (Beers,Food,)</li>
                <li>Investment dashboard</li> 
                <li>Teach people how to code a website</li> 
            </ol>
            <h3>
                These are our current ideas: 
            </h3>
        </header>
    </motion.div>
);
export default Ideas;
