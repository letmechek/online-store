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
        <button class="sandwichbtn" onClick={handleToggle}><img class="sandwich" src="https://logodix.com/logo/1038930.png"/></button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> <nav>
        Welcome, {user.name}
        <Link to="/">Home</Link>

        <Link to="/orders/new">New Order</Link>
        
        <Link to="/orders">Order History</Link>
        
        
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav></ul>
      </nav>
        )
    }
   