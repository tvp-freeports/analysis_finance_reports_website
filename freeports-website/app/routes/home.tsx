import type { Route } from "./+types/home";
import Header from "../components/header";
import Page from "../components/page";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}

export default function Home() {
  return <Page>
    <p>
      Home text
    </p>
  </Page>;
}
