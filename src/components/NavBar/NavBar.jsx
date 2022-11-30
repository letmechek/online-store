import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import React, { useState } from "react"


export default function NavBar({ user, setUser }) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

    return (
        <nav className="navBar" >
        <button className="sandwichbtn" onClick={handleToggle}><img className="sandwich" src="https://logodix.com/logo/1038930.png"alt=''/></button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> <nav>
        Welcome, {user.name}
        <Link to="/">Home</Link>

        <Link to="/products/new">Catalogue</Link>
        
        <Link to="/orders">Order History</Link>
        
        
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav></ul>
      </nav>
        )
    }
   