import * as React from 'react';
import Box  from '@mui/material/Box';
import lab from '/home/sd/Desktop/soupage/souweb/src/images/lablogo.png'
import uni from '/home/sd/Desktop/soupage/souweb/src/images/bathhlogo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function Header() {
return (
    <React.Fragment>

    
      
      
        <div>
        <Box
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}

          
        >

     



        
        <Stack direction="row" justifyContent="space-evenly"
              alignItems="flex-start" spacing={8}> 

         <div classname="container Img__container1">
                
                    <img src={lab} width={123} height={50} alt="Lab Logo" />
                
          </div>
                
               
          <div classname="container Img__container1">
                
                    <img src={uni} width={130} height={55} alt="Uni Logo" />
                
				</div>
         
            <Button sx={{ fontSize: 30 }} href="/About" >About</Button>
            <Button sx={{ fontSize: 30 }} href="Research">Research</Button>
            <Button sx={{ fontSize: 30 }} href="/People">People</Button>
            <Button sx={{ fontSize: 30 }} href="/Publications">Publications</Button>
            <Button sx={{ fontSize: 30 }} href="/Positions">Positions</Button>
            <Button sx={{ fontSize: 30 }} href="/Contact">Contact</Button>
      
           
      </Stack>
      </Box>
     
            
          
         
     
      
    </div>
  

      
      
        
      
    </React.Fragment>
  );
}


export default Header;

