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
    shadow-md/40
    shadow-black
    sm:m-13
    md:m-16
    lg:m-20
    w-full
    sm:w-9/10
    h-fit
    p-9
    flex
    flex-row
    ">
    <ul className="flex flex-row gap-4">
        <li><a href="https://github.com/GVoreste/analysis_finance_reports"><img className="w-20" src="assets/github-logo/github-mark.svg"/></a></li>
        <li><a href="https://github.com/GVoreste/analysis_finance_reports"><img className="w-20" src="assets/telegram-logo.svg"/></a></li>
        <li><a href="https://github.com/GVoreste/analysis_finance_reports"><img className="w-20" src="assets/discord-logo.svg"/></a></li>
    </ul>
    <nav >
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/">Home</NavLink>
         <NavLink className="hover:text-orange hover:text-shadow-lg hover:text-shadow-purple-drk/70" to="/contact-us">Contact Us</NavLink>
    </nav>
  </footer> ;
}