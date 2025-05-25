import { NavLink } from "react-router";

export default function Header() {
  return <header>
    <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  </header> ;
}