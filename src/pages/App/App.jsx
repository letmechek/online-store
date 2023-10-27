import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import Catalogue from "../Catalogue/Catalogue";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import ChatSupport from "../../components/ChatSupport/ChatSupport";
import Cancel from "../../components/OrderSucess/Cancel";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App auth">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/products"
              element={<Catalogue user={user} setUser={setUser} />}
            />
           
            <Route path="/" element={<Home />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
          <ChatSupport />
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          <Route path="/" element={<LoginForm setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
