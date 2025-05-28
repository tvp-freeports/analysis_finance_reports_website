import type { Route } from "./+types/home";
import Page from "../components/page";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports contacts" },
    { name: "description", content: "Contact Freeports maintainers" },
  ];
}
export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Contact_us() {
  return <Page>
      <section className="start-col-1 font-bold border-red border-5 rounded-4xl p-9">
        <address className="not-italic">
          <ul className="flex flex-col gap-4 ">
            <li className="flex flex-row gap-9">
                <p className="flex-grow">Email: </p> <a className="lg:w-3/10 hover:text-purple-drk active:text-purple overflow-scroll" href="mailto:info@freeports.org">info@freeports.org</a>
            </li>
            <li className="flex flex-row gap-9">
                <p className="flex-grow">Tel: </p> <a className="lg:w-3/10 hover:text-purple-drk active:text-purple overflow-scroll" href="tel:+39123456789">+39 123456789</a>
            </li>
            <li className="flex flex-row gap-9">
                <p className="flex-grow">Telegram: </p> <a className="lg:w-3/10 hover:text-purple-drk active:text-purple overflow-scroll" href="https://t.me/freeports">@freeports</a>
            </li>
          </ul>
        </address>
      </section>
    </Page>;
}