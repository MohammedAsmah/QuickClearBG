import { Routes,Route } from 'react-router-dom' 
import Home  from './pages/home'
import  Result  from './pages/result'
import { Buycredits } from './pages/Buycredits'
import { Navbar } from './components/navbar/navbar'
import './app.css'
import { Footer } from './components/footer/Footer'
export default function App(){
  return (
    <div className='container' >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        <Route path="/BuyCredits" element={<Buycredits/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}
