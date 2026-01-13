import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body(){
    const [Profile,setProfile]=useState([]);
    const [numberofprofile,setnumberofprofile]=useState("");
    async function generateProfile(count){
       const ran=Math.floor(1+Math.random()*10000);
       
        const response= await fetch(`https://api.github.com/users?since=${ran}&per_page`);//promises
        const data= await response.json();
       
        setProfile(data);
    }
    useEffect(()=>{
         generateProfile(10);

    },[])

    return(
        <div className="but">
            <input type="text" className="input" placeholder="Search here" value={numberofprofile} onChange={(e)=>setnumberofprofile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofprofile))}>search Profile</button>
    <div className="profiles">
        {
            Profile.map((value)=>{
              return(<div key={value.id} className="cards">
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="blank">profile</a>
                </div>)

            })
        }
    </div>
    </div>
)

   
}

export default Body;

//homework try catch functionality add karo,useCallBack function add karne ki kosis karo
//ek aur search button banao jisme search karenge naam ke basis pe aur agar uss user ki profile exists kar rahi hogi uss display kar dena.