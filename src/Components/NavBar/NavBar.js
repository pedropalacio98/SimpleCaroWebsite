import React from 'react';
import {useState} from "react";
import {NavLink} from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import './NavBar.css'; // Tell webpack that Button.js uses these styles
import simpleCaroLogo from "../../SimpleCaroLogo.png"
import {Grid,Button} from "@mui/material";

function NavBar() {
    const [isShown, setIsShown] = useState(false);

    return (
        <Grid container style={{
            background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
            fontFamily: "roboto",
            fontSize: "30px",
        }}>
            <Grid item xs={6} xm={1} xl={1} style={{vw: "100vw", maxHeight: "20vh"}}>
                <NavLink to="/">
                    <img src={simpleCaroLogo} style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        paddingLeft: "10vw",
                        filter: "drop-shadow(5px 6px 6px #66666)"
                    }}
                         className="shadow"/>
                </NavLink>
            </Grid>
            <Grid container xs={6} xm={1} xl={1} style={{alignSelf: "center", fontWeight: "bold"}}>
                <Grid item xs={4} xm={1}>
                    <NavLink to="/first" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>First</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/second" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>Second</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/third" className="navItem">
                        <Button variant="text" style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>Third</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default NavBar;
