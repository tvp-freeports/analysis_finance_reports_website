import type { Route } from "./+types/home";
import Page from "../components/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports website" },
    { name: "description", content: "Welcome to Freeports website" },
  ];
}



export default function Home() {
  return <Page>
      <section>
        <h2>
          The project
        </h2>
        <p>
          The aim of this project is to develop a tool capable of extract and aggregate data
          from public financial reports and export a <em>csv</em>. 
          The extracted information will be the ones that can be some ethical relevance or of 
          academic interest. Our purpose is to provide an easy way to retrieve information that 
          in order to enanche transparency of financial products.
        </p>
      </section>
         <div className="tongue tongue-r">
        </div>
        <section className="tongue-content">
          <h2>
            Entropy is <span className="line-through decoration-3">0bfusc4t10n</span>
          </h2>
          <p>
            In many countries there is already a <em>law corpus</em> that legiferate
            imposing some kind of transparency to help and inform consumers.
            The information is there, but retrieve it is not always trivial due to the
            disomogenity of the documents provided by financial institution. 
            <br/>This indirectly makes the information less relevant for the consumer.
          </p>
        </section>
      <section>
        <h2>
          <em>You</em>, is exactly what we need...
        </h2>
        <p>
          For this reason we choose to try to fill the gap between the raw information
          the digital sea and the everyday life of custumers of financial products. 
          In order to do so the jurney is long and not without difficulties. 
          For this reason and in order to enanche the active partecipation of people in the 
          process of data analysis we decided to create an <strong>Open Source</strong> software
          that anyone can use <strong>free</strong> forever owned by <strong>everyone </strong> 
          like these information should be. We want to put at the center the freedom of choice,
          possible by the existence and by the fruibility of information. The project is
          first of people that need it, so if you find it useful <strong>contribute</strong> to it 
          in your own personal way. Doesn't matter if you don't know how to program or know about finance,
          the important bit is the fire of wanting grow the project. <em>So, are you still waiting?</em>
          
        </p>
      </section>
  </Page>;
}
