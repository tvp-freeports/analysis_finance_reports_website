import type { Route } from "./+types/home";
import Header from "../components/header";
import Page from "../components/page";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports community" },
    { name: "description", content: "Meet others collaborators!" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Home() {
  return <Page>
    <section>
      <h2>
        Join the the adventure
      </h2>
      <p>
        Being part in a project with other peoples is always an enriching experience. 
        We think that the success of <em>Freeports</em> <span className="underline">is</span> and <span className="underline">should be</span> binded
        with the health and success of his community. For this reason we empathize the importance
        of the humans interactions and exchange. We hope to facilitate it providing a <strong>
          <a href="https://t.me/TheFreeportsProject">telegram group</a>
        </strong> and our <strong>
          <a href="https://discord.gg/FRcSBWtcDR">discord group</a>
        </strong>. Feel free to use the tool that you like the most but consider that for organization
        purpose we officially provide and try to moderate on these two platform for now.
      </p>
    </section>
    <div className="tongue tongue-r hidden sm:block"></div>
    <div className="tongue col-1 w-screen sm:hidden"></div>
    <section className="tongue-content">
      <h2>
        Code of conduct
      </h2>
      <p>
        Nobody is perfect, not me, not you, not them... <br/>
        Giving this premise we acknowledge that collaborate is as effective and fulfilling
        as difficult and sometimes frustrating. For this reason we will try to facilitate
        the cooperative environment safeguarding it in the way that we think more adequate.
        The specific rules are specified on our <strong><a href="https://github.com/tvp-freeports/analysis_finance_reports/blob/main/CODE_OF_CONDUCT.md">GitHub repository </a></strong>
        (also this document like everything else is a work in progress). We reccomand to read it.
        These rules are subordinate to the imperative master rule of respect towards the other peoples.
        Unfortunately common sense is common just nominally but not factually; 
        this because of the uniqueness of everyone. For this reason we ecourage to point out 
        any violation of the <strong>code of conduct</strong> or of any uncomfortable interpersonal dynamic
        that can rise (and unfortunately statistically speaking <em>will rise</em>) in this jurney.
      </p>
    </section>
  </Page>;
}