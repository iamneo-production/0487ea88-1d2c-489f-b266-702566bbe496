
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import Login from './pages/Signup';
import NewsApi from './pages/NewsApi';
import Sports from './pages/Sports';
import Tech from './pages/technology';
import Latestnews from './pages/latestnews';
import Entertainment from './pages/entertaiment';
import India from './pages/India';
import Business from './pages/Business';
import Science  from './pages/Science';
import Health from './pages/Health';
import LocalNews from './pages/Localnews';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/NewsApi'element={<NewsApi/>}/>  
        <Route path='/Sports'element={<Sports/>}/>
        <Route path='/technology'element={<Tech/>}/>
        <Route path='/latestnews'element={<Latestnews/>}/>
        <Route path='/enteraiment'element={<Entertainment/>}/>
        <Route path='/India'element={<India/>}/>
        <Route path='/Science'element={<Science/>}/>
        <Route path='/Health'element={<Health/>}/>
        <Route path='/Business'element={<Business/>}/>
        <Route path='/LOcalNews'element={<LocalNews/>}/>
        </Routes>
      </BrowserRouter>
    
      
     
    </div>
  );
}

export default App;


// App.js

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './pages/Dashboard';
// // import { Switch } from '@mui/material';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Route path='/' element={<Signup/>}/>

//          <Route path='/Signup'element={<Login/>}/>
//          <Route path='/NewsApi'element={<NewsApi/>}/>


//     </Router>
//   );
// };

// export default App;