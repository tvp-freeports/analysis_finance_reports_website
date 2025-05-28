import { NavLink } from "react-router";

export default function Footer() {
  return <footer className="
    header-footer
    bg-orange
    shadow-md/40
    grid
    grid-cols-1
    sm:grid-cols-3
    items-center
    ">
    <ul className="col-1 justify-center sm:justify-start flex flex-row gap-6 items-center">
        <li><a href="https://github.com/GVoreste/analysis_finance_reports"><img className="w-20" src="assets/github-logo/github-mark.svg"/></a></li>
        <li><a href="https://github.com/GVoreste/analysis_finance_reports"><img className="w-20" src="assets/telegram-logo.svg"/></a></li>
        <li><a href="https://discord.gg/FRcSBWtcDR"><img className="w-20" src="assets/discord-logo.svg"/></a></li>
    </ul>
    <nav className="sm:ml-10 lg:ml-0 sm:text-sm lg:text-base col-2 lg:col-3 flex flex-row gap-5 items-center">
         <NavLink className="navigation-link-footer" to="/contribute">Help the project</NavLink>
         <NavLink className="navigation-link-footer" to="/contact-us">Reach us</NavLink>
    </nav>
  </footer> ;
}