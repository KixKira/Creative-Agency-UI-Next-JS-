import { CardHorizontal } from "@/components/common/CardHorizontal";
import { showcase } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";

const Proyects = () => {
  return (
    <section className="expertise bg-top projects-section">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="PROYECTOS" />
          <br />
          <br />
          <Title title="Conoce nuestros proyectos" className="title-bg" />
        </div>
        <div className="hero-content">
          {showcase.map((showcase) => (
            <CardHorizontal
              key={showcase.id}
              data={showcase}
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
