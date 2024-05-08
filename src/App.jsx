import { Outlet } from "react-router-dom";
import mainLogo from './assets/logo_1.png'
import Header from './components/Header'
import { ContactUs } from './components/Form'
import './App.css'

function App() {

  return (
    <>
      <Header />
     
      <div className="flex flex-col justify-center content-center">
         <img src={mainLogo} className="logo my-11" alt=" Main page logo" />

          <h1 className="text-center text-3xl">Your new sceond nature.</h1>
          <p className="text-center text-lg"> 
           Build a Stoic mindset together. <br />
           I would like to share my unique point of view with real experience. 
          </p>
          <ContactUs />
        <Outlet />
      </div>
    </>
  )
}

export default App
