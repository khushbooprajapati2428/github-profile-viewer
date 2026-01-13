//Lecture number 9


import React, {useCallback,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import React from "react";
// Purana path hata kar direct file ka naam likhein kyunki wo ab padosi hain
import Head from "./Head.js"; 
import Body from "./Body.js";
function GithubProfile(){
    //header
    //body 10 card show karenge
    return(
        <>
        <Head></Head>
        <Body></Body>
        </>

    )

}

ReactDOM.createRoot(document.getElementById('root')).render(< GithubProfile/>);