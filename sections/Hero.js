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
        <div className="container">
          <TitleLogo title="creative" caption="7" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>
          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you ll ever need" />
            <p>
              Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
              dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
              ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut
              magna porttitor scelerisque.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      <ShowCase />
      {/* <Brand /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
