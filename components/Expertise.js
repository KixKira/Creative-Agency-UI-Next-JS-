import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { CardExpertise } from "./common/CardExpertise";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Diseñamos y producimos contenido con equipos a medida" />
          <p>
            Sin moldes, límites ni manuales, construyendo cada proyecto en
            conjunto.
          </p>
          <p>
            ’Cause we are JU, and ju we are.
            <br />
            Creating together is who we are.
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
