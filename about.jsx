import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Souprof from '/home/sd/Desktop/soupage/souweb/src/images/SouravProf.jpg'
import Box from '@mui/material/Box';
 


export default function Profile() {
  return (

    <Box sx={{ width: '100%', maxWidth: 3000 }}>
    <Typography variant="h2" gutterBottom>
      Welcome to Automated Flow Systems Laboratory
    </Typography>
   
  
    
	<Card sx={{ maxWidth: 1400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={Souprof}
          alt="SouravProf"
        /> 
		
		 <CardContent>
          <Typography gutterBottom variant="h5" component="div">
		  Sourav Chatterjee
          </Typography>
          <Typography variant="body1" color="text.secondary">
		  Currently I am the Principal Investigator of AI/ML guided Automated Flow Synthesis Laboratory. 
		  My research encompasses flow chemistry, microfluidics, machine learning and software engineering.
		  I have worked on research projects including unsteady state multiphase micro-reactor design for API synthesis, 
		  designed automated flow chemical synthesizer machines for multistep organic synthesis 
		  and used machine learning for solving complex chemical problems. 
          </Typography>
		  
        </CardContent>
      </CardActionArea>
      <CardActions>
		
        <Button size="large" variant="contained" color="primary" href= "https://scholar.google.com/citations?user=mk7KlSMAAAAJ&hl=en&oi=sra">
          My Google Scholar
        </Button>

        <Button size="large" variant="contained" color="primary" href= "https://researchportal.bath.ac.uk/en/persons/sourav-chatterjee">
          My University of Bath Website
        </Button>
      </CardActions>
    </Card>
      
    </Box>  
    
  );
}
