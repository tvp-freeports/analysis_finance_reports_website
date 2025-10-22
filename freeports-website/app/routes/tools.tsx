import type { Route } from "./+types/home";
import Page from "../components/page";
import { ToolSection, type Tool } from "../components/ToolsSection"; // Assuming you'll create a ToolSection component similar to ProjectSection
import { CollapsableList, type ElementCollapsableListInfos } from "../components/lists/collapsable";

/** Example data with background colors */
const TOOLS: ElementCollapsableListInfos[] = [
  {
    id: "tool-1",
    title: "Tool 1 — Data Analysis Suite",
    shortDescription:
      "Powerful data analysis tools to make sense of your datasets quickly and intuitively.",
    fullDescription:
      "Our Data Analysis Suite helps you explore, visualize, and extract insights from data with ease. It supports multiple formats and includes advanced statistical features.",
    bgColor: "bg-[#030712]",
    textColor: "text-white",
  },
  {
    id: "tool-2",
    title: "Tool 2 — Climate Impact Calculator",
    shortDescription:
      "Estimate the environmental impact of various activities and products.",
    fullDescription:
      "The Climate Impact Calculator lets you input various data points to calculate carbon footprints and helps you find ways to reduce your emissions effectively.",
    bgColor: "bg-[#030712]", // orange background
    textColor: "text-white",
  },
  {
    id: "tool-3",
    title: "Tool 3 — Climate Impact Calculator",
    shortDescription:
      "Estimate the environmental impact of various activities and products.",
    fullDescription:
      "The Climate Impact Calculator lets you input various data points to calculate carbon footprints and helps you find ways to reduce your emissions effectively.",
    bgColor: "bg-[#030712]", // orange background
    textColor: "text-white",
  },
]
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
      <section
        className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 mt-12"
      > 
        <h1 className="text-xl font-bold mb-3">Tools Under Development</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center text-base leading-relaxed">
          Explore the various tools we are building to assist in data analysis and climate tracking. Click a tool to expand its description.
        </p>
      </section>
      <CollapsableList elements={TOOLS}/>
      {/* Tools list */}
      {/*<div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {TOOLS.map((t) => (
          <ToolSection key={t.id} tool={t}/>
        ))}
      </div>
      */}
    </Page>
  );
}

