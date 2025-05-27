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
      <section>
        <address>
          <p className="disabled">Email: <a href="mailto:info@freeports.org">info@freeports.org</a></p> 
          <p className="disabled">Tel: <a href="tel:+39123456789">+39 123456789</a></p> 
          <p className="disabled">Telegram: <a href="https://t.me/freeports">@freeports</a></p> 
        </address>
      </section>
    </Page>;
}