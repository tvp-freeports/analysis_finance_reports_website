import type { Route } from "./+types/home";
// import { Header } from "../components/header";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Contact Freeports maintainers" },
  ];
}

export default function Contact_us() {
  return <p>
      Contact us text
    </p>;
}