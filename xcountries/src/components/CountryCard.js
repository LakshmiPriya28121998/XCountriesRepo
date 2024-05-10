import * as React from 'react';


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
  
