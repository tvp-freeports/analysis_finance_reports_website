import type { Route } from "./+types/home";
import Page from "../components/page";
import { Link } from "react-router-dom";

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
      <section>
        <h1>The purpose</h1>
        <p>
          In a world where information of public interest is too often
          locked behind complexity and costly barriers, Freeports
          seeks solutions to bring it to light, fostering civil society
          awareness and empowering people’s ability to make informed decisions.
          <br /><br />
          As its first initiative, we are developing a <Link to="/tools" className="text-link-black">full-stack transparency platform</Link> allowing people, journals, 
          researchers, NGOs, and companies to freely access, analyse and produce
          data on financial institutions' investments in companies linked 
          to human rights violations and environmental harm.
        </p>
      </section>

      <section className = "black-section">
        <h1>
          Transparency demands <span className="line-through decoration-3">4ccess1b1l1ty</span>
        </h1>
        <p>
          Today, we face unacceptable 
          barriers when trying to access socially vital information. Think of a
          depositor willing to verify whether their bank
          invests in companies involved with the illegal Israeli occupation of
          Palestinian territories, or a journalist seeking to uncover
          which funds invest the most in climate-destructive
          business practices.
          <br /><br />
          Even in countries with strong transparency regulation, 
          acquiring a similar understanding implies combining 
          countless, scattered regulatory filings and 
          company disclosures — or paying thousands of dollars
          for subscriptions to private databases. As a result, even
          when information is technically publicly
          available, it remains practically inaccessible to most, 
          constraining its diffusion and limiting people’s ability to
          make informed decisions.
        </p>
      </section>

      <section>
        <h1>United for clarity</h1>
        <p>
          We believe that transparency requires <em>accessibility</em>,
          not just availability of information. As of now, freeports can <Link to="https://drive.google.com/drive/folders/1L-mg5ABCFp8je5hhavW9WR8VK-OGqsTn?hl=it" className="text-link-red">identify</Link>, <Link to="https://docs.freeports.org/en/stable/index.html#" className="text-link-violet">retrieve</Link>, and <Link to="https://portlight-demo.streamlit.app/" className='text-link-orange'>display</Link> data
          on the portfolio holdings
          of European investment and pension funds. The path ahead is 
          to expand such methodology to cover other types of financial institutions and
          investment products, and make it robust across jurisdictions. 
          <br /> <br />
          Convinced that the way to achieve this collective mission is to
          join forces, we share the
          research methods and codebase used, committing to the principles of
          the <Link to="https://www.gnu.org/philosophy/free-sw.html" className="text-link-black">free software philosophy</Link> whenever
          possible. This way, researchers
          and developers dispose of all the tools needed to help us improve, or to adapt our methods and code to their
          own projects. The aim is to spark a new wave of public inquiry,
          paving the way for the birth of ethical investment applications
          and stronger transparency regulation that will make controversial business practices more visible and accountable to society.         
          <br /> <br />
          We’d be honored to have you join us
          — there’s much work yet to be done.
        </p>
      </section>

</Page>
  );
}

