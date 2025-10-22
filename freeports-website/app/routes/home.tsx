import type { Route } from "./+types/home";
import Page from "../components/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Home() {
  return (
    <Page>
      {/* Intro block */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 mt-12">
        <h1 className="text-xl font-bold mb-2 text-left">The mission</h1>
        <p className="text-gray-700 text-justify text-base leading-relaxed">
          In a world where publicly relevant information is often locked behind
          complexity, Freeports seeks solutions to bring it to light. As its
          first initiative, we are developing a full-stack transparency platform
          allowing people, journals, researchers, NGOs, and companies to easily
          access data on financial institutions' investments in companies linked
          to human rights violations and environmental harm.
          <br />
          <br />
          Born as an open-source vision, we commit to sharing the methodology
          and codebase used, providing tools for researchers and developers,
          whether they want to join us or adapt them for their own campaigns.
          The aim is to spark a new wave of public debate and investigations,
          paving the way for ethical investment and consumption applications
          that will make controversial business practices more visible and
          accountable to society.
        </p>
      </section>

      {/* Dark rectangular card section */}
      <section className="tongue-content">
        <h2>
          Entropy is <span className="line-through decoration-3">0bfusc4t10n</span>
        </h2>
        <p>
          When today's transparency laws demand private entities to disclose
          information of public interest, such as human rights and environmental
          impact of investments, this data ends up being scattered across
          countless providers.
          <br />
          <br />
          As a result, anyone trying to access socially vital information is
          confronted with complex corporate structures, filings, and disclosures,
          making information technically available but practically inaccessible.
        </p>
      </section>

      {/* Regular content section */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-6 mt-6">
        <h2 className="text-left text-xl font-semibold mb-3">United for clarity</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          We believe that transparency requires <em>accessibility</em> beyond the
          availability of information. Freedom to choose follows. A diverse group
          of researchers, developers, and designers united forces to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Scan transparency laws to identify where publicly relevant
            information is located;
          </li>
          <li>
            Develop the Freeports open-source software to parse PDFs and return
            structured datasets;
          </li>
          <li>
            Transform these datasets into statistics, visual analyses, and
            interactive applications.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          In a world where universal human and environmental rights are often
          trampled, we must ensure civil society is empowered to take a stance.
          We’d be honored to have you onboard — there’s much work to be done.
        </p>
      </section>
    </Page>
  );
}

