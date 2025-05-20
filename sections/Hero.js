import { home } from "@/assets/data/dummydata";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import React from "react";
import ShowCase from "@/components/ShowCase";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <video
          src="/video/web-ju.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          className="hero-video"
        />
        <div className="container">
          <h1 className="hero-title">JUWEARE</h1>
          <div className="sub-heading">
            <TitleSm title="PRODUCCIÓN" /> <span>.</span>
            <TitleSm title="AUDIOVISUAL" /> <span>.</span>
            <TitleSm title="CREATIVIDAD" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title
              title="Creamos conceptos, ejecutamos ideas y producimos contenido que
              deja huella"
            />
            <p>
              En <b>JU</b>, la creatividad sin pausa se transforma en
              experiencias visuales y marcas que conectan.
            </p>
          </div>
          <div className="hero-content-icons grid-3">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="indigo">{item.icon}</span> <br />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <ShowCase />
      <Banner />
    </>
  );
};

export default Hero;
