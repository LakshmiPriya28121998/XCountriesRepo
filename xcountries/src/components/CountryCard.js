import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from "./CountryCard.module.css"
import {
  Grid
} from "@mui/material";


export default function CountryCard({  image , name , alt}) {
 
 
    return (
      <div className="countryCard" style={{
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        margin : "10px",
        padding: "10px",
        border : "1px solid black",
        borderRadius : "8px",
        flexDirection: "column",
        width: "200px"
      }}>
      <img src={image} alt= {alt} style={{width : "100px", height: "100px"}}/>
      <h2>{name}</h2>
    
      </div>

//  <div className={styles.countryCard}>
// <img src={image} alt= {alt} style={{width : "100px", height: "100px"}}/>
// <h2>{name}</h2> 
// </div> 


    // <div className={styles.wrapperdiv}>
    //   <Card   sx={{ maxWidth: 200 }} height="205" className={styles.card}>
    //     <CardActionArea className={styles.image}>
    //       <CardMedia
    //         component="img"
    //         height="170"
    //         width={100}
    //         image={image}
    //         alt={alt}
         
    //       />
    //       <CardContent className={styles.content}>
 
    //       <h2 >{name}</h2>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
     
    //   </div>
    
    );
  }
  
