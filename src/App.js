import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Register = lazy(() => import('./pages/Register'));
const Landing = lazy(() => import('./pages/Landing'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
