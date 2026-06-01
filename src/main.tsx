import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './layout/Layout.tsx';
import './index.css'
import App from './pages/App.tsx';
import Projects from './pages/Projects.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
