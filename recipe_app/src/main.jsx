import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Recipe_tab from './Components/Recipe_tab.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Save_recipe from './Components/Save_recipe.jsx';
import Recipe_info from './Components/Recipe_info.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Recipe_tab />} />
        <Route path="/Recipe_tab" element={<Recipe_tab />} />
        <Route path="/Save_recipe" element={<Save_recipe />} />
        <Route path="/Recipe_info" element={<Recipe_info />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </Router>
  </StrictMode>
);
