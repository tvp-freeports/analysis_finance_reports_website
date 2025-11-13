import type { Route } from "./+types/home";
import Page from "../components/page";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports contribute" },
    { name: "description", content: "Discover how to contribute to the project" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Contribute() {
  return (
    <Page>
      {/* Regular content */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto">
        <h2 className="text-left text-xl font-semibold mb-3">How to contribute</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          You can join Freeports' <Link to="/" className="text-link-black">mission</Link> by either collaborating 
          with the team or partnering in a joint project.
        </p>
      </section>
      <section className="black-section">
        <h2>Join the team</h2>
        <p> The team members:
          <ul className="list-disc list-inside space-y-2 my-4">
            <li> Seek for <Link to="https://drive.google.com/drive/folders/1L-mg5ABCFp8je5hhavW9WR8VK-OGqsTn?hl=it" className="text-link-ice">sources</Link> highlighting corporations' linkages
              with human rights violations and environmental harm;
            </li>
            <li><Link to="https://drive.google.com/drive/folders/1L-mg5ABCFp8je5hhavW9WR8VK-OGqsTn?hl=it" className="text-link-red">Research</Link> on transparency laws to identify where data on the social
              impact of commercial and financial activities is located and collect the 
              associated documents;</li>
            <li><Link to="https://github.com/tvp-freeports/analysis_finance_reports" className="text-link-violet">Develop</Link> the Freeports open-source software, designed to parse heterogeneous PDF files
               and return structured datasets containing the metadata of interest;</li>
            <li> <Link to="https://github.com/tvp-freeports/data_queries_demo" className="text-link-orange">Elaborate</Link> the extracted datasets into ESG metrics, statistics, visual analyses, and interactive applications.</li>
            <li> Promote Freeports' mission via improving its <Link to="https://github.com/tvp-freeports/analysis_finance_reports_website" className="text-link-ice">website</Link>, maintaining social networks and looking for new partnerships.
            </li>
          </ul>
          If any of these roles resonate with the way you would like to contribute to the mission,
          or have other ideas, you are very welcome to <Link to="/contact-us" className="text-link-ice">contact us</Link>.
        </p>
      </section>
      <section>
        <h2>Become a partner</h2>
        <p> We are currently collaborating with an italian journal to 
          conclude our first <Link to="/projects" className="text-link-black">project</Link> aimed at
          revealing the exposure of European investment funds in companies that contribute
          to the illegal expansion of Israeli colonies in Palestinian territories.
          Together with the journal, we are looking for new partners to scale the project to a global level. It would be precious
          to <Link to="/contact-us" className="text-link-black">hear from you</Link> joining forces for a mission of transparency that can no longer wait.</p>
      </section>
    </Page>
  );
}


