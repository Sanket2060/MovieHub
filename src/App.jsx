import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import Body from './components/Body'
import Trending from '../pages/Trending'
function App() {

  return (
    <>
      <Header/>
        <Outlet/>   
      <Footer/>
    </>
  )
}

export default App
