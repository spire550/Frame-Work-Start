import React from 'react'
import Layout from './Comopnent/Layout/Layout'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Comopnent/Home/Home'
import About from './Comopnent/About/About'
import Portfolio from './Comopnent/Portfolio/Portfolio'
import Contact from './Comopnent/Contact/Contact'


let routers = createHashRouter ([
{path: "" , element:<Layout/>, children: [
  {index: true, element:<Home/>},
  {path:"about", element:<About/>},
  {path:"portfolio", element:<Portfolio/>},
  {path:"contact", element:<Contact/>},
]}
])

export default function App() {
  return (
    <>
    <RouterProvider router ={routers}/>
    </>
    
  )
}

