import type { Route } from "./+types/home";
// import { Header } from "../components/header";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}

export default function Home() {
  return <p>
      Home text
    </p>;
}
