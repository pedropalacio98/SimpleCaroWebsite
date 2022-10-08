import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'; // Tell webpack that Button.js uses these styles
import simpleCaroLogo from "../../SimpleCaroLogo.png"
import {Button, Grid} from "@mui/material";

function NavBar() {

    return (
        <Grid container style={{
            background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
            fontFamily: "roboto",
            fontSize: "30px",
        }}>
            <Grid item xs={6} xm={6} xl={6} style={{vw: "100vw", maxHeight: "20vh"}}>
                <NavLink to="/">
                    <img src={simpleCaroLogo} style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        paddingLeft: "10vw",
                        filter: "drop-shadow(5px 6px 6px #66666)"
                    }}
                         className="shadow" alt="alternative"/>
                </NavLink>
            </Grid>
            <Grid container xs={6} xm={1} xl={6} style={{alignSelf: "center", fontWeight: "bold"}}>
                <Grid item xs={4} xm={1}>
                    <NavLink to="/Ideas" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>Ideas</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/Pictures" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>Pictures</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/Contacts" className="navItem">
                        <Button variant="text" style={{fontWeight: "bold",color: "black",fontSize: "1.5rem"}}>Contact</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default NavBar;
