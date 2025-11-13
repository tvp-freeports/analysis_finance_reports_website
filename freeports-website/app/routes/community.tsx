import type { Route } from "./+types/home";
import Page from "../components/page";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports community" },
    { name: "description", content: "Meet other collaborators!" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Community() {
  return (
    <Page>
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-autos">
        <h2 className="text-left text-xl font-semibold mb-3">Community</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Being part of a collaborative project is always enriching. We believe
          the success of Freeports is bound to the health and growth of
          its community. To facilitate communication, we provide a <Link to="https://t.me/TheFreeportsProject" className="text-link-black">
              Telegram group </Link> and a <Link to="https://discord.gg/FRcSBWtcDR" className="text-link-black">
              Discord server </Link>.
        </p>
      </section>

      <section className="black-section">
        <h2>Ethics</h2>
        <p>
          We do our best trying to eliminate discriminatory factors in the
          fruition of freeports' resources. Economic and time disposal, direct
          and indirect racial, gender, religious, political, sexual
          orientation and age discrimination should never impair anyone from 
          accessing and contributing to any aspect of the project.
        </p>
      </section>

      <section>
        <h2>Code of conduct</h2>
        <p>
          Nobody is perfect — not me, not you, not them. Collaboration can be
          both fulfilling and challenging. For this reason, we aim to foster a
          cooperative and respectful environment.
          <br />
          <br />
          Our specific rules are listed in our <Link
              to="https://github.com/tvp-freeports/analysis_finance_reports/blob/main/CODE_OF_CONDUCT.md"
              className="text-link-black"
            >
              GitHub repository</Link>. These guidelines are subordinated to the master rule of respect for
          others. If you ever witness or experience uncomfortable dynamics, we
          encourage you to report them.
        </p>
      </section>
    </Page>
  );
}

