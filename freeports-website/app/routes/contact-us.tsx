import type { Route } from "./+types/home";
import Page from "../components/page";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports contacts" },
    { name: "description", content: "Contact Freeports maintainers" },
  ];
}

export default function Contact_us() {
  return <Page>
      Contact us text
    </Page>;
}