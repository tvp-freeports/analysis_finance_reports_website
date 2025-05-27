import { NavLink } from "react-router";

export default function Header() {
  return <header className="
    bg-purple 
    text-white
    text-shadow-lg
    text-shadow-purple-drk/40
    font-bold
    uppercase
    sm:rounded-3xl 
    rounded-b-full
    overflow-auto 
    shadow-md/50
    shadow-black
    sm:m-13
    md:m-16
    lg:m-20
    p-9">
      <img alt="Mobile version of Freeports faboulous logo" className="hidden sm:inline" src="/assets/logo/complete.svg"/>
    <nav >
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/">Home</NavLink>
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/contact-us">Contact Us</NavLink>
    </nav>
      <img alt="Desktop version of Freeports faboulous logo" className="sm:hidden" src="/assets/logo/square.svg"/>
  </header> ;
}