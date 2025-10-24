import type { Route } from "./+types/home";
import Page from "../components/page";
import { BlackSection } from "../components/ui/BlackSection"

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
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-12 mt-12">
        <h2 className="text-left text-xl font-semibold mb-3">Join the adventure</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Being part of a collaborative project is always enriching. We believe
          the success of <em>Freeports</em> is bound to the health and growth of
          its community. To facilitate this, we provide a{" "}
          <strong>
            <a href="https://t.me/TheFreeportsProject" className="underline">
              Telegram group
            </a>
          </strong>{" "}
          and a{" "}
          <strong>
            <a href="https://discord.gg/FRcSBWtcDR" className="underline">
              Discord server
            </a>
          </strong>
          .
        </p>
      </section>

      {/* Dark card */}
      <BlackSection>
        <h2>Code of conduct</h2>
        <p>
          Nobody is perfect — not me, not you, not them. Collaboration can be
          both fulfilling and challenging. For this reason, we aim to foster a
          cooperative and respectful environment.
          <br />
          <br />
          Our specific rules are listed in our{" "}
          <strong>
            <a
              href="https://github.com/tvp-freeports/analysis_finance_reports/blob/main/CODE_OF_CONDUCT.md"
              className="underline"
            >
              GitHub repository
            </a>
          </strong>
          . These guidelines are subordinate to the master rule of respect for
          others. If you ever witness or experience uncomfortable dynamics, we
          encourage you to report them.
        </p>
      </BlackSection>
    </Page>
  );
}

