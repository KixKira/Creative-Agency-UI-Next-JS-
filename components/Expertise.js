import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { CardExpertise } from "./common/CardExpertise";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Creatividad colectiva y producción a medida" />
          <p>
            Creamos conceptos, ejecutamos ideas y producimos contenido pensado
            para funcionar.
            <br />
            En JU, la creatividad es nuestro motor principal: con un equipo
            interdisciplinario, transformamos visión en piezas visuales que
            comunican, venden y conectan.
          </p>
          <p>
            Nos adaptamos a cada proyecto sin moldes, sin límites y con caminos
            que construimos junto a ti.
            <br />
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
