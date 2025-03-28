import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import { showcase } from "@/assets/data/dummydata";

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
        <div className="hero-content grid-3">
          {showcase.map((item) => (
            <Card data={item} key={item.id} caption="saber más" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects;
