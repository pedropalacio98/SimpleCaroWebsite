import React from 'react';
import {motion} from "framer-motion";
import ListItem from "../List-item/ListItemCustom";

const container = {
    hidden: {opacity: 0}, show: {
        opacity: 1, transition: {
            staggerChildren: 0.10, delayChildren: 0.1
        }
    }
}
const Ideas = () => (


    <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit={{opacity: 0}}
    >
        <header style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bolder",
            height: "30vh",
            alignItems: "center",
            color: "white"
        }}>
            <h1>
                Current ideas:
            </h1>
        </header>
        <body className="container" style={{backgroundColor: "#282C34"}}>
        <div className="row" style={{backgroundColor: "#282C34"}}>
            <div className="col-md-3 h-100" style={{paddingBottom: "40px"}}>
                <ListItem
                    text="Blog explore Cern surroundings">
                </ListItem>
            </div>
            <div className="col-md-3 h-100">
                <ListItem
                    text="Plants development">
                </ListItem>
            </div>
            <div className="col-md-3">
                <ListItem
                    text="Blog how we will run sub 20 5k">
                </ListItem>
            </div>
            <div className="col-md-3">
                <ListItem
                    text="Blog living with SN">
                </ListItem>
            </div>
            <div className="col-md-3">
                <ListItem
                    text="Food we have cooked and tried (Beers,Food,)">
                </ListItem>
            </div>
            <div className="col-md-3">
                <ListItem
                    text="Investment dashboard">
                </ListItem>
            </div>
            <div className="col-md-3">
            <ListItem
                text="Teach people how to code a website">
            </ListItem>
            </div>
        </div>
        </body>
    </motion.div>);
export default Ideas;
