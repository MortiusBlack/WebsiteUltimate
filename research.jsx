import React from "react";
import WeBa from '/home/sd/Desktop/soupage/souweb/src/images/WebBanner.jpg'
import ARS from '/home/sd/Desktop/soupage/souweb/src/images/AppRadSynth.png'
import ml from '/home/sd/Desktop/soupage/souweb/src/images/ML1.png'
import gl from '/home/sd/Desktop/soupage/souweb/src/images/gly2.png'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

function Header() {
    return (
        <React.Fragment>
    
        <Stack spacing={20} justifyContent="space-evenly"  >
        <div classname="container Img__container1">
                
                <img src={WeBa} width={1350} height={600} alt="Lab Logo" />
            
         </div>
            

        <Box sx={{ width: '100%', maxWidth: 1500 }}>
        <Typography variant="h3" gutterBottom>
        Current Research
       </Typography>
       
          <Typography variant="h5" color="text.secondary" justifyContent="centre">
          My research interest lies in understanding and control of chemical reaction dynamics and catalysis. To
realize this goal I have taken the advantage of microreactor technology, induction/radio frequency heating,
design of automated flow chemical platforms and machine learning. I have designed multiphase microreactor
systems coupled with nonconventional heating technology such as induction heating to control catalysis,
developed automated flow platform for understanding and controlling one of the most complex chemistry,
chemical glycosylation. I have also designed an automated chemical synthesizer capable of multistep chemical
synthesis with programmed reconfigurability. Additionally, I have applied Machine Learning algorithms on data
obtained from automated flow chemical platforms coupled with DFT calculations to understand and predict
stereoselective outcome of chemical glycosylation and predict reaction conditions.
          </Typography>

          <Card sx={{ maxWidth: 1400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={ARS}
          alt="lab1"
          sx={{ objectFit: "contain" }}
        /> 

      <CardContent> 

      <Typography variant="h4" color="text.secondary">

		  Chatterjee, S. et al. Nature 2020, 579, 379 
      "Automated radial synthesis of organic molecules" 
      </Typography>

      </CardContent>  
		  <CardActions>
		
    <Button size="large" variant="contained" color="primary" href= "https://www.nature.com/articles/s41586-020-2083-5">
      Read it here
    </Button>
   
     </CardActions>
     </CardActionArea>

     <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={ml}
          alt="lab1"
          sx={{ objectFit: "contain" }}
        /> 

      <CardContent> 

      <Typography variant="h4" color="text.secondary">

      Chatterjee, S. et al. Chem. Sci. 2021,12, 2931 
      "Predicting glycosylation stereoselectivity using machine learning"
      </Typography>

      </CardContent>  
		  <CardActions>
		
    <Button size="large" variant="contained" color="primary" href= "https://pubs.rsc.org/en/content/articlehtml/2021/sc/d0sc06222g">
      Read it here
    </Button>
   
     </CardActions>
     </CardActionArea>


     <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={gl}
          alt="lab1"
          sx={{ objectFit: "contain" }}
        /> 

      <CardContent> 

      <Typography variant="h4" color="text.secondary">

		  Chatterjee, S. et al. JACS, 2018, 140, 11942, "An Empirical Understanding of the Glycosylation Reaction"
      </Typography>

      </CardContent>  
		  <CardActions>
		
    <Button size="large" variant="contained" color="primary" href= "https://pubs.acs.org/doi/full/10.1021/jacs.8b04525">
      Read it here
    </Button>
   
     </CardActions>
     </CardActionArea>






     </Card>
        </Box> 
        </Stack>
        

 </React.Fragment>
  );
}


export default Header;
