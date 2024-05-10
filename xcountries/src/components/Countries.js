
import { useEffect, useState } from 'react';
import axios from "axios";
import CountryCard from './CountryCard';
 




export default function Countries() {

 const [countries, setCountries] = useState([]);
const [input, setInput] = useState("")

 const url = "https://restcountries.com/v3.1/all"

    const performAPICall = async () => {

       
        try{
        let result1 = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(result1.data)
       
        if(input.length > 0){
          var res = countries.filter((country) => country.name.common.toLowerCase().includes(input.toLowerCase()));
          setCountries(res);
        }
        
        }
        catch (e) {
            if (e.response && e.response.status === 500) {
             console.log(e.response.data.message);
            
            } else {
              console.log(
                "Could not fetch flags. Check that the backend is running, reachable and returns valid JSON." );
            }
          }
        
    }

    const handlechange = (event) => {
      setInput(event.target.value)
      
    }

    useEffect(() => {
        performAPICall()
    },[input])


    return (
     

  <div> 
   
    <input type="text" placeholder="Search for countries" onChange={handlechange}></input>
      
      <div className="countryCard" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}>
        
               {countries.map((country) => <CountryCard image={country.flags.png} name={country.name.common} alt={country.flags.alt}/>)}
    </div>
    </div>
    );
  }