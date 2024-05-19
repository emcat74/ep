import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThingsToRead from './pages/ThingsToRead';
import Support from './pages/Support';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import SocialBar from './components/SocialBar';

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path ='/home' element ={<Home/>}></Route>
          <Route path = '/portfolio' element={<Portfolio/>}></Route>
          <Route path ='/about' element={<ThingsToRead/>}></Route>
          <Route path = '/support' element={<Support/>}></Route>
          <Route path ='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <SocialBar/>

    </div>
  );
}

export default App;
