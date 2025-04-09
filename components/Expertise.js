import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { CardExpertise } from "./common/CardExpertise";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Nuestra experiencia" />
          <p>
            Creatividad colectiva y producción a medida, con artistas y
            profesionales multidisciplinarios que dan vida a tu visión, sin
            límites ni formatos predefinidos.
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
