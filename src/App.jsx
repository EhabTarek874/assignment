
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/Home/Home';




let x =createBrowserRouter([
  {path: '', element:<Layout />, children: [
    {index: true, element: <Home />},
    {path: 'about', element: <About />},
    {path: 'portfolio', element: <Portfolio />},
    {path: 'contact', element: <Contact />},
    {path: '*', element: <Notfound />},
  ]}
])

function App() {
  

  return <RouterProvider router={x}></RouterProvider>;
}

export default App
