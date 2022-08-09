import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/containers/Layout';
import Login from '../src/containers/Login';
import RecoveryPassword from '../src/containers/RecoveryPassword';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import '../src/styles/global.css'

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  };
  
  export default App;