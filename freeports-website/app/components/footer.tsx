import { NavLink } from "react-router";

export default function Footer() {
  return <footer className="
    bg-orange
    text-white
    text-shadow-lg
    text-shadow-purple-drk/40
    font-bold
    uppercase
    sm:rounded-3xl 
    rounded-t-4xl
    overflow-auto
    shadow-md/40
    shadow-black
    sm:m-13
    md:m-16
    lg:m-20
    p-9">
    <ul>
        <li>github</li>
        <li>telegram</li>
        <li>discord</li>
    </ul>
    <nav >
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/">Home</NavLink>
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/contact-us">Contact Us</NavLink>
    </nav>
  </footer> ;
}