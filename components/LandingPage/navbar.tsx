'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { LogoutAction } from "state/actions/user";

import Hamburger from 'hamburger-react'
// import { usePathname } from 'next/navigation'

const Navbar = ({isLoggedIn}:any) => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar-1">
        <div className="container-1">
          <a className="logo" href='/' >
            {/* <Image src={logo} alt="My SVG" width={345} height={50} /> */}

          </a>
          <div className="menu-icon-1" style={{zIndex:10000}} onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          
          <div className={`nav-elements-1  ${showNavbar && 'active'} `}>
            <ul>
              <li>
                <a href='/futures/exchange' >Buy Crypto</a>
              </li>
              <li>
                <a href="/markets">Market</a>
              </li>

              <li>
                <a href='/contact'>Trade</a>
              </li>

              <li>
                <a href={isLoggedIn ? "/p2p" : "/signin"}>P2P</a>
              </li>

              <li>
                <a href='/contact'>More</a>
              </li>
            </ul>
            <div className="nav-elements-2">
            {/* {isLoggedIn && <a href="" onClick={LogoutAction()}><button className="btn-1">Logout</button></a>} */}
           <a href="/newlogin"><button className="btn-1">Log in</button></a>
           <a href="/signup"><button className="btn-2">Sign up</button></a> 
           </div>
          </div>
   
          <div className={`${showNavbar&& 'overlay' }`} style={{display:showNavbar?'flex':'none'}}>
          </div>
          </div>
        
      </nav>
    )
  
}

export default Navbar