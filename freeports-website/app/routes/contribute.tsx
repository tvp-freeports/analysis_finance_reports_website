import type { Route } from "./+types/home";
import Page from "../components/page";

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
      {/* Dark card for intro */}
      <section className="tongue-content">
        <h2>The ethics</h2>
        <p>
          Given the ethical foundation of this project, we uphold the core
          principles of free software philosophy. We believe that personal
          freedom begins with the free availability of information and
          knowledge.
          <br />
          <br />
          Our goal is to remove discriminatory barriers to accessing and using
          data — whether economic, social, or otherwise — through an open,
          independent, and pragmatic approach.
        </p>
      </section>

      {/* Regular content */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-12 mt-12">
        <h2 className="text-left text-xl font-semibold mb-3">How to contribute</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          We’re balancing structure with accessibility — ensuring contribution
          remains simple, collaborative, and enjoyable. You can reach out to us
          via email or your preferred channel for guidance.
          <br />
          <br />
          Documentation is available at{" "}
          <strong>
            <a
              href="https://docs.freeports.org"
              className="underline text-blue-400"
            >
              docs.freeports.org
            </a>
          </strong>{" "}
          and specifically in the{" "}
          <strong>
            <a
              href="https://docs.freeports.org/contribute.html"
              className="underline text-blue-400"
            >
              contribute section
            </a>
          </strong>
          . Everything is a work in progress — feel free to help improve it.
        </p>
      </section>
    </Page>
  );
}


