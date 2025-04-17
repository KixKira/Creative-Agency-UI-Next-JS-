import React from "react";
import { Title, TitleLogo } from "./common/Title";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div>
          <Title title="Empecemos a trabajar juntos" className="big-title" />{" "}
          <br />
          {/* <TitleLogo title="Lets take your business to the next level!" /> */}
        </div>
        <div>
          <Link href="/contact">
            <button className="button-primary">Contáctanos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
