import { useRouter } from "next/router";
import { experience } from "@/assets/data/dummydata";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import Head from "next/head";

const ExperienceDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Encuentra el elemento correspondiente en el arreglo
  const experiences = experience.find((item) => item.id === parseInt(id));

  if (!experiences) {
    return <p>No experience found</p>;
  }

  return (
    <>
      <Head>
        <title>Juweare | {experiences.title}</title>
      </Head>
      <section className="expertise bg-top projects-section">
        <div className="container">
          <div className="heading-title" />
          <div className="hero-content">
            <div className="main-content">
              <div className="image-wrapper">
                {experiences.cover ? (
                  <Image
                    src={experiences.cover}
                    alt={experiences.title || "Experience Image"}
                    width={600}
                    height={400}
                    className="main-image"
                  />
                ) : (
                  <p>No cover available</p>
                )}
              </div>
              <div className="details-section">
                <h1 className="title title-detail">
                  {experiences.title || "Untitled expertise"}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: experiences.subtitle || "No description available.",
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="card links">
            <Link href="/proyects">
              <button className="button-primary bold">
                VER TODOS LOS PROYECTOS{" "}
                <HiOutlineArrowRight className="link-icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceDetails;
