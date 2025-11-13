import type { Route } from "./+types/home";
import Page from "../components/page";
import { ToolCard } from "../components/ui/ToolCard";
import type { CardInfo } from "../components/ui/Card";

const TOOLS: CardInfo[] = [
  {
    id: "tool-1",
    title: "Portlight views",
    fullDescription:
      `The open-access data visualisation platform where civil society
      can learn about and compare financial institutions' investments
      in companies linked to human and environmental rights violations.`,
    href: "https://portlight-demo.streamlit.app/"
  },
  {
    id: "tool-2",
    title: "Freeports software",
    fullDescription:
      `The open-source software that  journalists, researchers and app
      developers can use to parse financial
      institutions' pdf disclosures on portfolio holdings returning structured datasets
      that can be elaborated to fit countless ideas.
      `,
    href: "https://docs.freeports.org/en/stable/index.html#"
  },
  {
    id: "tool-3",
    title: "Dock drive",
    fullDescription:
      `The open-access workspace where we develop the methods to identify
      controversial companies, track corporate
      structures, find and combine public information on portfolio holdings, build ESG metrics, and outline the legal implications
      stemming from investing in controversial companies.`,
    href: "https://drive.google.com/drive/folders/1L-mg5ABCFp8je5hhavW9WR8VK-OGqsTn?hl=it"  
  }
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
      <section>
        <h1>Resources</h1>
        <p>
         Following, the resources we are developing and sharing
         with everyone to promote transparency 
         on the social and environmental impact of financial and consumption products.
        </p>
      </section>

      <div className="col-start-2 col-span-3 flex flex-col items-center justify-self-start w-full max-w-4xl">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} card={tool} />
        ))}
      </div>
    </Page>
  );
}




