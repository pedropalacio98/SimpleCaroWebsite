import React from 'react';
import {motion} from "framer-motion";
import {LinearProgress, Stack} from "@mui/material";

const Pictures = () => (
    <motion.div className="App"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
    >
        <header className="App-header">

            <h1>Pictures page under maintenance</h1>
            <br></br>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={8}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
                <LinearProgress color="error" />
            </Stack>
        </header>
    </motion.div>
);
export default Pictures;

