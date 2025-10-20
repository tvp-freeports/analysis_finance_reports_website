import type { Route } from "./+types/home";
import Header from "../components/header";
import Page from "../components/page";
// import { Footer } from "../components/footer"

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

export default function Tools() {
  return <Page>
    
    <div className="tongue-l tongue hidden sm:block">
    </div>
    <div className="w-screen tongue sm:hidden">
    </div>
    <section className="tongue-content">
      <h2>
        Under development
      </h2>
      <p>
        Content description
      </p>
    </section>
    
    <section>
      <h2>
        Under development
      </h2>
      <p>
        Content description
      </p>
    </section>
  </Page>;
}