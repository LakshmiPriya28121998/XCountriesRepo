import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from "axios";
import {
    Grid
  } from "@mui/material";
import CountryCard from './CountryCard';





export default function Countries() {

 const [countries, setCountries] = useState([]);
 const url = "https://restcountries.com/v3.1/all"

    const performAPICall = async () => {


        try{
        let result1 = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(result1.data)
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

    useEffect(() => {
        performAPICall()
    },[])


    return (
     
  
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}>
        
       
               <Grid container spacing={2}>
                    {countries.map((product) => ( 
                                <Grid key={product.id} item lg={1.7}>
                                  <CountryCard 
                                    countrycard={product} image={product.flags.png} name={product.name.common} alt={product.flags.alt}
                                  />
                                </Grid>
                              ))}
                    </Grid> 
               
               {/* {countries.map((country) => <CountryCard image={country.flags.png} name={country.name.common} alt={country.flags.alt}/>)} */}
    </div>
    );
  }