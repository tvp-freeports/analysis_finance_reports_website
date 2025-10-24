import type { Route } from "./+types/home";
import Page from "../components/page";
import { BlackSection } from "../components/ui/BlackSection"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Home() {
  return (
    <Page>
      {/* Intro block */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 mt-12">
        <h1 className="font-bold mb-2 text-left">The purpose</h1>
        <p className="text-gray-700 text-justify leading-relaxed">
          In a world where socially relevant information is often
          locked behind complexity and costly barriers, Freeports
          seeks solutions to bring it to light, fostering the
          circulation of knowledge and empowering people’s decision-making whenever public interest
          is at stake.
          <br /><br />
          As its first initiative, we are developing a 
          full-stack transparency platform allowing people, journals, 
          researchers, NGOs, and companies to freely access and analyse
          data on financial institutions' investments in companies linked 
          to human rights violations and environmental harm.
        </p>
      </section>

      {/* Dark rectangular card section */}
      <BlackSection>
        <h2>
          Transparency requires <span className="line-through decoration-3">4ccess1b1l1ty</span>
        </h2>
        <p>
          Today, we face unacceptable 
          barriers when trying to access socially vital information. Think of a
          depositor willing to verify whether their bank
          invests in companies involved with the Israeli occupation of
          Palestinian territories, or a journalist seeking to uncover
          which funds invest the most in climate-destructive practices.
          <br /><br />
          Even in countries with strong transparency regulations, 
          retrieving similar data entails navigating through complex
          corporate structures, fragmented regulatory filings, and 
          countless company disclosures — or paying thousands of dollars
          for subscriptions to private databases. 
          <br /><br />
          As a result, even when information is technically publicly
          available, it remains practically inaccessible to most, 
          restraining its diffusion and compromising people’s ability to
          make informed decisions.
        </p>
      </BlackSection>

      {/* Regular content section */}
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-6 mt-6">
        <h2 className="text-left text-xl font-semibold mb-3">United for clarity</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          We believe that real transparency demands <em>accessibility</em>,
          not just availability of information. In a world where 
          businesses continue to enable human rights abuses and fuel environmental
          destruction, civil society must be in the position, at least,
          to express their opinions and act accordingly.
          <br /><br />
          Born with an open-source vision, we commit to sharing the
          methods and codebase used, providing tools for researchers
          and developers who want to contribute or adapt them for their
          own work. The aim is to spark a new wave of public inquiry,
          paving the way for ethical investment and consumption applications
          that will make controversial business practices more visible and
          accountable to society. 
          <br /><br />
          We’d be honored to have you join us 
          — there’s much work yet to be done.
        </p>
      </section>
    </Page>
  );
}

