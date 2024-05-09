import { Outlet } from "react-router-dom";
import mainLogo from '../assets/logo_1.png'
import Header from '../components/Header'
import { ContactUs } from '../components/Form-KOR'
import '../App.css'

function App() {

  return (
    <>
      <Header />
     
      <div className="flex flex-col justify-center content-center">
         <img src={mainLogo} className="logo my-11" alt=" Main page logo" />

          <h1 className="text-center text-3xl">당신의 뉴 노멀.</h1>
          <p className="text-center text-lg"> 
           Stoic 마인드를 함께 배우며 돕고 성장해 가요. <br />
           저의 개인적인 스토리와 경험담을 공유해 드리고 Stoic을 쉽게 배워가요. <br /> <br />

           <h2> 홈페이지가 준비중 입니다 :) <br /> 
           언제든지 연락해 주세요. </h2> 
          </p>
          <ContactUs />
        <Outlet />
      </div>
    </>
  )
}

export default App
