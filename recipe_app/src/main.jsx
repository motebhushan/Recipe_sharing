import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Recipe_tab from './Components/Recipe_tab.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Save_recipe from './Components/Save_recipe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Recipe_tab" element={<Recipe_tab />} />
        <Route path="/Save_recipe" element={<Save_recipe />} />
      </Routes>
    </Router>
  </StrictMode>
);
