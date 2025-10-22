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
      "
    >
      <ul className="col-1 justify-center sm:justify-start flex flex-row gap-6 items-center">
        <li>
          <a href="https://github.com/tvp-freeports/analysis_finance_reports">
            <img
              className="w-20"
              src="assets/github-logo/github-mark.svg"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/tvp-freeports/analysis_finance_reports">
            <img
              className="w-20"
              src="assets/telegram-logo.svg"
              alt="Telegram"
            />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/FRcSBWtcDR">
            <img
              className="w-20"
              src="assets/discord-logo.svg"
              alt="Discord"
            />
          </a>
        </li>
      </ul>

      <nav className="sm:ml-10 lg:ml-0 sm:text-sm lg:text-base col-2 lg:col-3 flex flex-row gap-5 items-center">
        <NavLink
          to="/contribute"
          className="bg-black text-white px-6 py-3 inline-block rounded"
        >
          Help the project
        </NavLink>
        <NavLink
          to="/contact-us"
          className="bg-black text-white px-6 py-3 inline-block rounded"
        >
          Reach us
        </NavLink>
      </nav>
    </footer>
  );
}

