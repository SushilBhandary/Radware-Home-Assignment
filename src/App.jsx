import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Add from './components/Add';
import ItemslistPage from './components/ItemslistPage';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <Router> 
      <div >  
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/Accounts" element={<ItemslistPage type="accounts" />} />
          <Route path="/Accounts/:id" element={<ItemPage type="accounts" />} />
          <Route path="/Users" element={<ItemslistPage type="users" />} />
          <Route path="/Users/:id" element={<ItemPage type="users" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
