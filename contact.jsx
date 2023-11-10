import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import spa from '/home/sd/Desktop/soupage/souweb/src/images/SouPhyAdd.png'

export default function Profile() {
	return (
  
	  <Box sx={{ width: '100%', maxWidth: 3000 }}>
	  <Card sx={{ maxWidth: 3000 }}>
		<CardActionArea>
		  <CardMedia
			component="img"
			height="600"
			image={spa}
			alt="SouravProf"
			sx={{ objectFit: "contain" }}
		  /> 
		  
		   <CardContent>
			<Typography gutterBottom variant="h5" component="div">
			Sourav Chatterjee
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
  