// import React from "react";
// import "./Dashboard.css"
// import {Link} from "react-router-dom";
// function Dashboard(){
// 	return(
// 		<div className="navbar">
//             {/* <div className="nav">
//                 <Link to="/Signup" ><button className="a">LOGOUT</button></Link>
//                 <Link to="/about"><button className="a">ABOUT US</button></Link>
//                 <Link to="/contact"><button className="a">CONTACT US</button></Link>
//                 <Link to="/home"><button className="a">Home</button></Link>
//             </div> */}
           
//   <head>
 
//   </head>
//   <body><div class="area"></div><nav class="main-menu">
//             <ul>
//                 <li>
//                     <a href="https://jbfarrow.com">
//                         <i class="fa fa-home fa-2x"></i>
//                         <Link to="/home"><button class="nav-text">
//                            Home
//                         </button></Link>
//                     </a>
                  
//                 </li>
//                 { <li class="has-subnav">
//                     <a href="#">
//                         <i class="fa fa-globe fa-2x"></i>
//                        <Link to="/Global"> <button class="nav-text">
//                             Global
//                         </button></Link>
//                     </a>
                    
//                 </li> }
//                 { <li class="has-subnav">
//                     <a href="#">
//                        <i class="fa fa-comments fa-2x"></i>
//                         <Link to="/"><button class="nav-text">
//                             Post
//                         </button></Link>
//                     </a>
                    
//                 </li> }
//                 {<li class="has-subnav">
//                     <a href="#">
//                        <i class="fa fa-camera-retro fa-2x"></i>
//                         <Link to="/photos"><button class="nav-text">
//                             Photos
//                         </button></Link>
//                     </a>
                   
//                 </li>}
//                 {<li>
//                     <a href="#">
//                         <i class="fa fa-film fa-2x"></i>
//                         <Link to="/Videos"><button class="nav-text">
//                             Videos
//                         </button></Link>
//                     </a>
//                 </li> }
//                 <li>
//                     <a href="#">
//                         <i class="fa fa-book fa-2x"></i>
//                         <Link to="/NewsApi"><button class="nav-text">
//                             Latest News
//                         </button></Link>
//                     </a>
//                 </li>
//                 <li>
//                    <a href="#">
//                        <i class="fa fa-cogs fa-2x"></i>
//                        <Link to="/entertinment"><button class="nav-text">
//                             Entertinement
//                         </button></Link>
//                     </a>
//                 </li>
//                 <li>
//                    <a href="#">
//                         <i class="fa fa-map-marker fa-2x"></i>
//                         <Link to="/Sports"><button class="nav-text">
//                           Sports
//                         </button></Link>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                        <i class="fa fa-info fa-2x"></i>
//                        <Link to="/about"><button class="nav-text">
//                             About us
//                         </button></Link>
//                     </a>
//                 </li>
//             </ul>

//             <ul class="logout">
//                 <li>
//                    <a href="#">
//                          <i class="fa fa-power-off fa-2x"></i>
//                          <Link to="/Signup"><button class="nav-text">
//                             Logout
//                         </button></Link>
//                     </a>
//                 </li>  
//             </ul>
//         </nav>
//   </body>
  
            
//             {/* <Link to="/home"><button><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Home</button></Link> */}
//             {/* <Link to="/contact"><button><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>contact us </button></Link>  */}
//         </div> 
// );
//         }
// export default Dashboard;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Navbar = () => {
  return (
    <nav>
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
          <br/><br/><br/>
        </div>
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <Link to="/NewsApi">Home</Link>
          </li>
          <li>
            <Link to="/latestnews">Latest News</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
          <li>
            <Link to="/Sports">Sports</Link>
          </li>
          <li>
            <Link to="/enteraiment">Entertainment</Link>
          </li>
          <li>
            <Link to="/India">India</Link>
          </li>
          <li>
            <Link to="/Business">Business</Link>
          </li>
          <li>
            <Link to="/Science">Science</Link>
          </li>
          <li>
            <Link to="/Health">Health</Link>
          </li>
          <li>
            <Link to="/LocalNews">LocalNews</Link>
          </li>
          {/* Add more categories as needed */}
        </ul>
        <div className="notification-icon">
          <span>3</span>
          <i className="fas fa-bell"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
