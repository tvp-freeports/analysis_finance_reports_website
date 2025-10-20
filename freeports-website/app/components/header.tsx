import { NavLink } from "react-router";

export default function Header() {
  return <header className="
    header-footer
    rounded-b-full
    bg-purple 
    shadow-md/50
    sm:gap-4
    items-center
    sm:items-start
    flex
    flex-col
    ">
      <img alt="Desktop version of Freeports faboulous logo" className="hidden sm:inline w-full md:w-8/10 lg:w-7/10" src="/assets/logo/complete.svg"/>
    <nav>
         <NavLink className="navigation-link-header" to="/">Home</NavLink>
         <NavLink className="navigation-link-header" to="/tools">Tools</NavLink>
         <NavLink className="navigation-link-header" to="/projects">Projects</NavLink>
         <NavLink className="navigation-link-header" to="/contribute">Contribute</NavLink>
         <NavLink className="navigation-link-header" to="/community">Community</NavLink>
         <NavLink className="navigation-link-header" to="/contact-us">Contact Us</NavLink>
    </nav>
      <img alt="Mobile version of Freeports faboulous logo" className="sm:hidden w-6/10 justify-center" src="/assets/logo/square.svg"/>
  </header> ;
}