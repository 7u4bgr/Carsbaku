import React from 'react';
import './App.css';
import { routeArr } from './routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Wrapper from './components/UI';
import Page2 from './pages/page2';
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
                <Page5/>
                <Wrapper/>
                <item.component/>
                <Footer />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
