import { NavLink } from "react-router";

export default function Header() {
  return <header className="
    bg-purple 
    text-white 
    sm:rounded-3xl 
    rounded-b-full
    overflow-auto 
    shadow-md/50
    shadow-black
    sm:m-13
    md:m-16
    lg:m-20
    p-9">
    <nav>
         <img className="hidden sm:inline" src="/assets/logo/complete.svg"/>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/contact-us">Contact Us</NavLink>
         <img className="sm:hidden" src="/assets/logo/square.svg"/>
    </nav>
  </header> ;
}