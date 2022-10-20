import React from 'react'
import './Footer.css'; // Tell webpack that Button.js uses these styles
import randomColor from 'randomcolor';
import {motion} from "framer-motion";
import {AiFillInstagram} from "react-icons/ai"
const my_color = randomColor()


function Footer() {

    return (
        <motion.div className="footer-dark"

                    animate={{boxShadow: "0 0 .8rem #fff,\n" +
                            "        0 0 .1rem #fff,\n" +
                            "        0 0 0.5rem #bc13fe,\n" +
                            "        0 0 2rem #bc13fe,\n" +
                            "        0 0 4rem #bc13fe"}}
        >
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Different tabs</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/Ideas">Ideas</a></li>
                                <li><a href="/Pictures">Pictures</a></li>
                                <li><a href="/Contact">Contact</a></li>
                                <li><a href="/History">History</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>What do we do</h3>
                            <p>This is just a sample website with the purpose of improving of coding
                            skills and do a brainstorming of all the possible ideas for a coming project.
                            </p>
                        </div>
                        <div className="col item social .btn-floating">
                            <a href="#"><AiFillInstagram/></a>
                        </div>
                    </div>
                    <p className="copyright">Simple Caro Website © 2022</p>
                </div>
            </footer>
        </motion.div>
    );
}

export default Footer;
