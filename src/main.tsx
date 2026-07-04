import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './layout/Layout.tsx';
import './index.css'
import App from './pages/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<App />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
