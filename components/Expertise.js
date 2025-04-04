import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import { CardExpertise } from "./common/CardExpertise";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Nuestra experiencia" />
          <p>
            Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac
            volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula
            at, molestie dolor.
          </p>
        </div>
        <div className="hero-content grid-3">
          {expertise.map((item) => (
            <CardExpertise data={item} key={item.id} caption="Saber más" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
