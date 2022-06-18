import React from 'react';
import NavBar from './NavBar/NavBar';
import background from "../images/homebg.jpeg";

function Home(){
    return(
        <div  style={ {backgroundImage:`url(${background})` ,height:"800px" }}>
            <NavBar/>
        <div style={{margin:"50px"}}>
            
            <h2>Welcome to Vehicle Management System. </h2>
        </div>
        </div>
    )
}

export default Home;