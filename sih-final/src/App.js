import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LoginUser from './components/LoginUser';
import LoginAdmin from './components/LoginAdmin';
import Profile from './components/Profile';
import HospitalDetails from './components/HospitalDetails';
import Chat from './components/Chat';
import BookAppointment from './components/BookAppointment';
import Booked from './components/Booked';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login-user" element={<LoginUser/>} />
        <Route path="/login-admin" element={<LoginAdmin/>} />
        <Route  path="/user-profile" element={<Profile/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/hospital/:id" element={<HospitalDetails/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/book-appointment" element={<BookAppointment/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/booked" element={<Booked/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
