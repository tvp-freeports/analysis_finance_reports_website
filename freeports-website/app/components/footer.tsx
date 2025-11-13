import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer
      className="
        header-footer
        grid
        grid-cols-1
        sm:grid-cols-3
        items-center
        overflow-visible
        py-6
      "
    >
      {/* Social Icons */}
      <ul className="row-start-1 col-1 justify-center sm:justify-start flex flex-row gap-6 items-center">
        <li>
          <a href="https://github.com/tvp-freeports/analysis_finance_reports" target="_blank" rel="noopener noreferrer">
            <img
              className="w-16"
              src="assets/github-logo/github-mark.svg"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/tvp-freeports/analysis_finance_reports" target="_blank" rel="noopener noreferrer">
            <img
              className="w-16"
              src="assets/telegram-logo.svg"
              alt="Telegram"
            />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/FRcSBWtcDR" target="_blank" rel="noopener noreferrer">
            <img
              className="w-16"
              src="assets/discord-logo.svg"
              alt="Discord"
            />
          </a>
        </li>
      </ul>

      {/* Footer Navigation Links */}
      <nav className="mt-6 sm:mt-0 sm:ml-10 lg:ml-0 col-2 lg:col-3 flex flex-row gap-6 items-center justify-center sm:justify-end">
        {[
          { path: "/contribute", label: "Join us" },
          { path: "/contact-us", label: "Reach out" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={`
              relative
              text-[#030712]
              font-medium
              first-letter:capitalize
              before:block
              before:absolute
              before:bottom-0
              before:left-1/2
              before:w-0
              before:h-[2px]
              before:bg-[#030712]
              before:origin-center
              before:transition-all
              before:duration-300
              hover:before:w-full
              hover:before:left-0
              transition-colors
              duration-300
            `}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}


