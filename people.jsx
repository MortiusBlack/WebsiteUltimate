import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'

export default function Profile() {
  return (
  
    <Box sx={{ width: '100%', maxWidth: 3000 }}>
	<Card sx={{ maxWidth: 1400 }}>
  <Stack spacing={10}>
  
   
    <Typography gutterBottom variant="h5" component="div">
		       Undergraduates
          </Typography>
          <Typography variant="body1" color="text.secondary">
		        Will be Updated (Februrary 2024)
          </Typography> 

          <Typography gutterBottom variant="h5" component="div">
		      PhD Students 
          </Typography>
          <Typography variant="body1" color="text.secondary" >
		       
          Apply in the group&emsp;
          <Button size="small" variant="contained" color="primary" href= "https://www.findaphd.com/phds/project/university-of-bath-ursa-project-automated-synthesis-and-artificial-intelligence-guided-discovery-of-heterogenous-catalysts-for-co-oxidation/?p162956">
          Apply
        </Button>

         
          </Typography>

          

          <Typography gutterBottom variant="h5" component="div">
		      Permanent Members 
          </Typography>
          <Typography variant="body1" color="text.secondary">
		       

          Sandipan Datta - Research Engineer and Software Developer
          </Typography>
		  
		  
		      
		 </Stack> 
      
    </Card>
      
    </Box>
    
  );
}

  
      
    
  



