import type { Route } from "./+types/home";
import Page from "../components/page";
import { ToolSection } from "../components/features/ToolSection";
import type { ElementCollapsableListInfos } from "../components/features/collapsable";

/** Example data with background colors */
const TOOLS: ElementCollapsableListInfos[] = [
  {
    id: "tool-1",
    title: "Impact Drive",
    fullDescription:
      `The open-access workspace where we conduct the 
      economic and legal research needed to track corporate
      structures, identify where public information on the 
      social impact of consumption and investment products 
      is located, and report on the corporate social 
      responsibility implications when institutions are found
      facilitating human rights violations and fuelling 
      climate destruction.`,
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: ""
    
  },
  {
    id: "tool-2",
    title: "Freeports Software",
    fullDescription:
      `The open-source software we use to collect the 
      documents from corporate websites and regulatory 
      authorities,  to parse the heterogenous pdf we 
      encounter and return structured datasets.`,
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: "https://github.com/tvp-freeports"
  },
  {
    id: "tool-3",
    title: "Portlight Analytics",
    fullDescription:
      `ts`,
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: ""
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports resources" },
    {
      name: "description",
      content: "Overview of resources available for data analysis and environmental tracking.",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function ToolsPage() {
  return (
    <Page>
      {/* Intro block */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 mt-12">
        <h1 className="font-bold mb-3">Resources</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center leading-relaxed">
         Following, the toolkit we have  developed so far to foster transparency 
         on the social and environmental impact of financial and consumption products.
         <br /><br /> 
         As of yet, these resources are ready to be combined to 
         assess only some categories of financial institutions: open-end
         investment funds and pension funds.
         Thanks to the exceptionally strong transparency regulation 
         mandating the periodical publication of their portfolio
         holdings, one would only need to gather these 
         disclosures from the managers' websites, use the Freeports 
         open-source software to turn the pdf files into structured 
         datasets, and elaborate the results as wished for 
         personal or public use.      
        </p>
      </section>

      {/* Tools list */}
      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {TOOLS.map((tool) => (
          <ToolSection key={tool.id} tool={tool} />
        ))}
      </div>
    </Page>
  );
}




