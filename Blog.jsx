import * as React from 'react';
import Header from '/home/sd/Desktop/soupage/souweb/src/components/header.jsx';
import Footer from '/home/sd/Desktop/soupage/souweb/src/components/footer.jsx';
import About from '/home/sd/Desktop/soupage/souweb/src/pages/about.jsx';
import Research from '/home/sd/Desktop/soupage/souweb/src/pages/research.jsx';
import People  from '/home/sd/Desktop/soupage/souweb/src/pages/people.jsx';
import Contact from '/home/sd/Desktop/soupage/souweb/src/pages/contact.jsx';
import Positions from '/home/sd/Desktop/soupage/souweb/src/pages/positions.jsx'
import Publications from '/home/sd/Desktop/soupage/souweb/src/pages/Publications.jsx'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';


function Blog() {
  return (
     
<React.Fragment>



    <Router>
      <Header>
     </Header>
     
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/About' element={<About />} />
                <Route path='/Research' element={<Research />} />
                <Route path='/People' element={<People />} />
                <Route path='/Publications' element={<Publications />} />
                <Route path='/Positions' element={<Positions />} />
                <Route path='/Contact' element={<Contact />} />
              
            </Routes>
           

     
   <Footer>
  </Footer>
</Router>



</React.Fragment>
);
}

export default Blog;
  

  
