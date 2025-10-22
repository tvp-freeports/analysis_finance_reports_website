import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="w-full flex flex-col bg-purple items-center py-4">
      {/* Desktop logo */}
      <img
        alt="Desktop version of Freeports fabulous logo"
        className="hidden sm:block w-60 md:w-72 lg:w-80 mx-auto my-6"
        src="/assets/logo/complete.svg"
      />

      {/* Navigation */}
      <nav className="mt-2 w-full flex justify-center">
        <ul className="flex flex-wrap justify-between w-4/5 gap-x-4 gap-y-2">
          {[
            { path: "/", label: "Home" },
            { path: "/tools", label: "Tools" },
            { path: "/projects", label: "Projects" },
            { path: "/contribute", label: "Contribute" },
            { path: "/community", label: "Community" },
            { path: "/contact-us", label: "Contact Us" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="uppercase font-regular tracking-wide navigation-link-header"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile logo */}
      <img
        alt="Mobile version of Freeports fabulous logo"
        className="sm:hidden w-40 my-6"
        src="/assets/logo/square.svg"
      />
    </header>
  );
}

