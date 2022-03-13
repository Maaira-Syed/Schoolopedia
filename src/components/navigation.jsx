import { Badge, Typography, Button } from "./Wrappers/Wrappers";
import {Routes,Route, useLocation} from "react-router-dom";

import log from "../img/logo_main.png"
import login from "../pages/NewLogin/Login";
import {Link} from 'react-router-dom';
export const Navigation = (props) => {
  const location= useLocation();
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        
          
          <a className='navbar-brand page-scroll '  href='/'>
           <div className="logo-div ">
          <img src={log} className="logo-s" />
            SCHOOLOPEDIA
            </div>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <Link to="/" className='page-scroll'>
                Home
              </Link>
            </li> */}
            <li>
              <a href='#features' className='page-scroll'>
                Search School
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Our Services
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
            <li>
              
            {/* <Routes location={location } key={location.pathname}>
            <Route path="/login" component={login} />
            </Routes> */}
                {/* <Button onClick={()=>props.history.push('/login')}>Sign in</Button> */}
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
