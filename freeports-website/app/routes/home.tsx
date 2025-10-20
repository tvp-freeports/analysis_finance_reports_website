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
      <section>
        <h1>The mission</h1>
        <p>
          In a world where publicly relevant information is
          often locked behind complexity, Freeports seeks solutions
          to bring it to light. As its first initiative, we are developing a full-stack
          transparency platform allowing people, journals, researchers,
          NGOs, and companies to easily access data on financial institutions' investments in companies
          linked to human rights violations and environmental harm.
          <br />
          <br />
          Born as an open-source vision, we commit
          to sharing the methodology and codebase used, providing tools
          for researchers and developers, whether they want to join us
          or adapt them for their own campaigns.
          The aim is to spark a new wave of public debate and 
          investigations, paving the way for ethical investment and consumption applications
          that will make controversial business practices
          more visible and accountable to society.
          </p>
      </section>

      <div className="tongue tongue-r"></div>

      <section className="tongue-content">
        <h2>
          Entropy is <span className="line-through decoration-3">0bfusc4t10n</span>
        </h2>
        <p>
          When today's transparency laws demand private entities to disclose 
          information of public interest (such as human rights and 
          environmental impact of investments, or the risk 
          profile of financial products), this data ends up 
          being scattered within and across countless information 
          providers.
          <br />
          <br />
          As a result, anyone trying to access socially vital information (for 
          example, a depositor checking whether their bank invests in 
          companies involved in the Israeli occupation of Palestinian 
          territories) is confronted with a puzzle of complex corporate structures,
          regulatory filings, and company disclosures, making the
          formally available information virtually inaccessible, thus
          preventing individuals from taking meaningful decisions.
        </p>
      </section>

      <section>
        <h2>United for clarity</h2>
        <p>
          We believe that transparency requires <em>accessibility </em>
        beyond availability of socially relevant information.
        Freedom to choose, follows.
          A diverse group of young researchers,
          developers, and designers united forces to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Scan transparency laws to identify where
            publicly relevant information is located and
            collect the associated documents;
          </li>
          <li>
            Develop the Freeports open-source software, designed to parse
            heterogeneous PDF files and return structured datasets;
          </li>
          <li>
            Transform these datasets into statistics, visual analyses, and
            interactive applications.
          </li>
        </ul>
        <p>
        In a world where universal human and environmental rights are
        trampled right before our eyes, we must do our best 
        to ensure civil society will be in the position, at least, to 
        take a stance. No matter your background, we would
        be honored to have you onboard, there is much work to be done. 
        </p>
      </section>
    </Page>
  );
}

