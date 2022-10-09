import React from 'react'
import {NavLink} from "react-router-dom"
import './NavBar.css'; // Tell webpack that Button.js uses these styles
import SN from "../../SN.png"
import {Button, Grid} from "@mui/material"
import randomColor from 'randomcolor';
const my_color = randomColor()


function NavBar() {

    return (
        <Grid container style={{
            background: "conic-gradient(from 90deg, #222222 , "+my_color+")",
            fontFamily: "roboto",
            fontSize: "30px",
            alignItems: "baseline",
            spacing: "24"
        }}>
            <Grid item xs={6} xm={6} xl={6} style={{vw: "10vw", maxHeight: "20vh",alignSelf:"center"}} >
                <NavLink to="/">
                    <img src={SN} style={{
                        width: "200px",
                        maxHeight: "80%",
                        maxWidth: "100%",
                        paddingLeft: "1vw",
                    }}
                         className="shadow" alt="alternative"/>
                </NavLink>
            </Grid>
            <Grid container xs={6} xm={6} xl={6} style={{alignSelf: "center", fontWeight: "bold",textTransform: "capitalize"}}>
                <Grid item xs={12}> {/*This one was supposed to be an empty cell. But stupid react doesn't render it unless it contains smt. So I placed a dot*/}
                    .
                </Grid>
                <Grid item xs={3} xm={1}>
                    <NavLink to="/Ideas" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "white",fontSize: "1.5rem",textTransform: "capitalize", }}>Ideas</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={3}>
                    <NavLink to="/Pictures" className="navItem" >
                        <Button variant="text"  style={{fontWeight: "bold",color: "white",fontSize: "1.5rem",textTransform: "capitalize",}}>Pictures</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={3}>
                    <NavLink to="/Contact" className="navItem">
                        <Button variant="text" style={{fontWeight: "bold",color: "white",fontSize: "1.5rem",textTransform: "capitalize",}}>Contact</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={3}>
                    <NavLink to="/History" className="navItem">
                        <Button variant="text" style={{fontWeight: "bold",color: "white",fontSize: "1.5rem",textTransform: "capitalize",}}>History</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default NavBar;
