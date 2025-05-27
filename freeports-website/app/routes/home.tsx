import type { Route } from "./+types/home";
import Header from "../components/header";
import Page from "../components/page";
import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}

export function links() {
  return [
    {
      rel: "icon",
      href: "/assets/logo/icon.svg",
      type: "image/svg",
    },
  ];
}


export default function Home() {
  return <Page>
      <section>
        <h2>
          The project
        </h2>
        <p>
          Home text
        </p>
      </section>
        <div className="tongue tongue-r w-30 h-30">
        </div>
        <section className="tongue-content">
          <h2>
            Entropy is obfuscation
          </h2>
          <p>
            Home text
          </p>
        </section>
      <section>
        <h2>
          <em>You</em>, is exactly what we need...
        </h2>
        <p>
          Home text
        </p>
      </section>
  </Page>;
}
