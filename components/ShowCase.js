import { Card } from "./common/Card";
import { HiOutlineArrowRight } from "react-icons/hi";
import { showcase } from "@/assets/data/dummydata";
import { Title } from "./common/Title";
import Link from "next/link";
import React from "react";

const ShowCase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="heading-title">
          <Title title="Proyectos Destacados" />
        </div>
        <div className="hero-content grid-3 py">
          {showcase.map((item) => (
            <Card data={item} key={item.id} caption="Saber Más" />
          ))}
        </div>
        <div className="card links">
          <Link href="/proyects">
            Ver todos los proyectos{" "}
            <HiOutlineArrowRight className="link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
