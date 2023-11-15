import React from 'react'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Trending,Movies,TVSeries,Search,Comment} from './pages/pagesIndex.js'
import './index.css'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Trending/>}/>
    <Route path='movies' element={<Movies/>}/>
    <Route path='tvseries' element={<TVSeries/>}/>
    <Route path='search' element={<Search/>}/>
    <Route path='comment' element={<Comment/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
