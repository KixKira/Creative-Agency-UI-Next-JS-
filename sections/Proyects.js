import { CardHorizontal } from "@/components/common/CardHorizontal";
import { proyects } from "@/assets/data/dummydata";
import { Title } from "@/components/common/Title";

const Proyects = () => {
  return (
    <section className="expertise bg-top projects-section">
      <div className="container">
        <div className="heading-title">
          <br />
          <br />
          <Title title="Conoce nuestros proyectos" className="title-bg" />
        </div>
        <div className="hero-content">
          {proyects.map((proyects) => (
            <CardHorizontal
              key={proyects.id}
              data={proyects}
              buttonLabel="Saber más"
              path="/proyects"
              caption="Saber más"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects;
