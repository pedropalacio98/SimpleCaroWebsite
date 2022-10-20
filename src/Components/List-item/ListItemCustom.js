import React from 'react';
import {motion} from "framer-motion";

const item = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0
    }
}

export default function ListItem(props) {
    const first = props.text;
    const cardText = props.cardText;
    const img = props.img;
    return (
        <motion.div variants={item}>
            <div className="card" style={{borderRadius: "20px"}}>
                <motion.img
                    style={{borderRadius: "20px"}}
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            type: "spring",
                            stiffness: "260",
                            damping: "16",
                            mass: "2"
                        },
                    }}
                    src={img!=null?img:""} />
                <div className="card-body">
                    <div className="card-title text-center text-capitalize" style={{fontFamily: "Roboto"}}>
                        <h3>- {first}</h3>
                    </div>
                    <p className="card-text text-center fw-bolder">{cardText}</p>
                </div>
            </div>
        </motion.div>
    )
}
