import type { Route } from "./+types/home";
import Page from "../components/page";
import { ToolSection } from "../components/ToolSection";
import type { ElementCollapsableListInfos } from "../components/lists/collapsable";

/** Example data with background colors */
const TOOLS: ElementCollapsableListInfos[] = [
  {
    id: "tool-1",
    title: "Tool 1",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    fullDescription:
      "Our Data Analysis Suite helps you explore, visualize, and extract insights from data with ease. It supports multiple formats and includes advanced statistical features.",
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: "https://github.com/tvp-freeports"
    
  },
  {
    id: "tool-2",
    title: "Tool 2",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    fullDescription:
      "The Climate Impact Calculator lets you input various data points to calculate carbon footprints and helps you find ways to reduce your emissions effectively.",
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: "https://github.com/tvp-freeports"
  },
  {
    id: "tool-3",
    title: "Tool 3",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    fullDescription:
      "This tool allows you to monitor your carbon footprint over time, identify high-emission activities, and suggest actionable improvements.",
    bgColor: "bg-[#030712]",
    textColor: "text-white",
    href: "https://github.com/tvp-freeports"
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports — Tools" },
    {
      name: "description",
      content: "Overview of tools available for data analysis and environmental tracking.",
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
        <h1 className="text-xl font-bold mb-3">Tools (under development)</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
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




