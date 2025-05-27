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
    shadow-md/50
    shadow-black
    sm:m-13
    md:m-15
    lg:m-20
    w-full
    sm:w-9/10
    p-8
    flex
    flex-col
    sm:gap-4
    items-center
    sm:items-start
    ">
      <img alt="Desktop version of Freeports faboulous logo" className="hidden sm:inline w-full md:w-8/10 lg:w-7/10" src="/assets/logo/complete.svg"/>
    <nav>
         <NavLink className="navigation-link-header" to="/">Home</NavLink>
         <NavLink className="navigation-link-header" to="/contact-us">Contact Us</NavLink>
    </nav>
      <img alt="Mobile version of Freeports faboulous logo" className="sm:hidden w-6/10 justify-center" src="/assets/logo/square.svg"/>
  </header> ;
}