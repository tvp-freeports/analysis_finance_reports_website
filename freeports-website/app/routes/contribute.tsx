import type { Route } from "./+types/home";
import Header from "../components/header";
import Page from "../components/page";
// import { Footer } from "../components/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports contribute" },
    { name: "description", content: "Discover how to contribute to the project" },
  ];
}


export default function Contribute() {
  return <Page>
    <div className="tongue-l tongue hidden sm:block">
    </div>
    <div className="w-screen tongue sm:hidden">
    </div>
    <section className="tongue-content">
      <h2>
        The ethics
      </h2>
      <p>
        Giving the ethic purpose of the project we sustain the keys points of the <strong><a href="https://www.gnu.org/philosophy/philosophy.html">free software philosophy</a></strong>. 
        We are convinced that the personal freedom start from the free avalaibility of information and knowledge. 
        This perspective is not innovative in the human history, but we add a remark about that:
        we live in a world where in many cases the biggest obstacle to the knowledge is not the difficulty in finding information,
        but many times the opposite! Every day data is produced and consumed by informative systems. 
        Our ambiscous plan is to take the minimal omogenety imposed by the law in financial reports and try to exploit it to help the work of data aggregation and filtering
        of economists and data-scientist (or in general people that need it) easier.<br/>
        We want to do it trying to eliminate discriminatory factors in the fruition of data like economic disposal,
        time disposal, direct and indirect racial, gender, religious, political, sexual orientation, age
        discrimination. For doing so we think that the only recipe is a pragmatic approach.
        Making the project fully open and independent.
      </p>
    </section>
    
    <section>
      <h2>
        How to contribute
      </h2>
      <p>
        We are actively trying to find a balance to the necessity of making the contribution process organized in a way
        that naturally lend to incremental update of the software and all the other (many!) aspects of the project and 
        a system that is easy and that should permit to anyone to give his contribute and hopefully have fun doing so.
        We know that everyone is a different book with a unique story and potential to help the community around this project;
        for this reason we encourage you to contact us by email or in the way that you like the most in order to resolve any
        doubt about the project in general or about how to actively contribute to it. We are trying to include in the 
        <strong> <a href="https://docs.freeports.org">project documentation</a></strong> at the <strong><a href="https://docs.freeports.org/contribute.html">contribute section</a></strong>
        a guide on how to do that in the most straight forward manner. The documentation is still a work in progress and all the project
        is a construction site, so feel free to ask for whatever doubt or to point out whatever you feel is relevant and/or interesting.
      </p>
    </section>
  </Page>;
}