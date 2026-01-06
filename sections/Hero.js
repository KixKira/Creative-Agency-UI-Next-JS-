import { home } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
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
            <TitleSm title="CONTENIDO" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Creatividad colectiva y producción a medida" />
            <p>
              En <b>JU</b> convertimos ideas en experiencias visuales que
              funcionan.
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
