import React from "react"

// const themes = {
//   sun: {
//     value: 'sun',
//     iconURl: 'https://image.flaticon.com/icons/svg/890/890347.svg'
//   },
//   moon: {
//     value: 'moon',
//     iconURl: 'https://image.flaticon.com/icons/svg/1415/1415431.svg'
//   }
// }

const Header = () => {
 return (
  <header className="header"
  >
    <img className="logo" src="./17326157-logo.png" alt="logo"/>
    <div className="main-menu">
      <a href="#" className="button -active">Who We Are?</a>
      <a href="#" className="button">What Can We Do?</a>
      <a href="#" className="button">Contact Us</a>
      <a href="#">
         <img className="themeicon" src={'https://image.flaticon.com/icons/svg/890/890347.svg'} alt="sun icon"/>
      </a>
    </div>
  </header>
  )  
}

export default Header
