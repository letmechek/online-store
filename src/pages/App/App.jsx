import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import Catalogue from '../Catalogue/Catalogue'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App auth" >
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            
            
            <Route path="/products/new" element={<Catalogue user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage  />} />
            <Route path="/" element={<Home />} />
            
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


