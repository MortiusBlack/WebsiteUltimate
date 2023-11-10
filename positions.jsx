import { Card } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';


export default function Profile() {
    return (
    
      <Box sx={{ width: '100%', maxWidth: 3000 }}>
      <Card sx={{ maxWidth: 3000 }}>
      <Stack spacing={10}>

<Typography gutterBottom variant="h5" component="div">
		      Current Opportunities in the Group &emsp;
          </Typography>
          <Typography variant="body1" color="text.secondary">
		       
          PhD Position in the Group&emsp;
          <Button size="large" variant="contained" color="primary" href= "https://www.findaphd.com/phds/project/university-of-bath-ursa-project-automated-synthesis-and-artificial-intelligence-guided-discovery-of-heterogenous-catalysts-for-co-oxidation/?p162956">
          Apply
        </Button>

         
          </Typography>
          </Stack>        
</Card>
</Box>
    )
}