import type { Route } from "./+types/home";
import Page from "../components/page";

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
    <section className="border-[5px] border-[#030712] p-9">
      <address className="not-italic">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-9">
            <p className="font-bold flex-grow">Email:</p>
            <a className="lg:w-3/12" href="mailto:info@freeports.org">info@freeports.org</a>
          </li>
          <li className="flex gap-9">
            <p className="font-bold flex-grow">Tel:</p>
            <a className="lg:w-3/12" href="tel:+39123456789">+39 123456789</a>
          </li>
          <li className="flex gap-9">
            <p className="font-bold flex-grow">Telegram:</p>
            <a className="lg:w-3/12" href="https://t.me/TheFreeportsProject">@Freeports</a>
          </li>
        </ul>
      </address>
    </section>
    </Page>;
}