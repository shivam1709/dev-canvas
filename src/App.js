import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div>
        <Landing/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
