import React from 'react';
import {motion} from "framer-motion";
import './Contact.css'
import franchi from "../../FranchiGordo.png"

const Contact = () => (
    <motion.div className="App"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
        <div>
            <section className="headerSection">
                <div className="row justify-content-center align-content-center"
                     style={{
                         background: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)",
                         alignItems: "center",
                         height: "90vh"
                     }}>
                    <div className="col-md-8 col-sm-12">
                        <div>
                            <p style={{
                                fontSize: "24px",
                                textAlign: "start",
                                paddingLeft: "90px",
                                marginBottom: "0px",
                                fontWeight: "bold"
                            }}>Hi there 👋, i'm</p>
                            <h1 style={{
                                color: "#ccf381",
                                fontWeight: "bolder",
                                fontSize: "80px",
                                wordWrap: "break-word",
                                textAlign: "center"
                            }}><span>Francesco</span> <br/><span>Ivone.</span></h1>
                            <a style={{color: "white"}}> I enjoy being a pelotudo and pissing off people around me all day</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12" style={{height: "400px"}}>
                            <img src={franchi} style={{width: "220px", height: "300px",right: "200px",position: "absolute",borderRadius: "40px",boxShadow: "10px 10px 50px black"}}/>
                    </div>
                    <div className="col-md-8 row">
                        <ul className="row">
                            <li className="col-md-6" style={{textAlign: "center"}}>
                                Highly skilled at coding, as you can see.
                            </li>
                            <li className="col-md-6" style={{textAlign: "center"}}>
                                Over a decade of experience breaking balls of my clients across several countries.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </section>
            <div className="spacer layer1"></div>
            <section>
            </section>

            <section>
            </section>

            <section>
            </section>
        </div>
    </motion.div>
);
export default Contact;

