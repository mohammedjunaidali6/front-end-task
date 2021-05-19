import React from "react";
import Page1 from './Page1'
import Page2 from './Page2'
import  { BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

 function App() {
  return (
    <Router>
      <div className="App">
        
      <NavLink style={{color:'black', textDecoration:'none',marginLeft:'580px',fontSize:'25px',backgroundColor:'Orange'}} exact  to="/page1" >Page-1</NavLink>
      <NavLink style={{color:'black', textDecoration:'none',marginLeft:'50px',fontSize:'25px',backgroundColor:'Orange'}} exact  to="/page2">Page-2</NavLink>
      
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />

    </div>
    </Router>
  );
}
export default App;
