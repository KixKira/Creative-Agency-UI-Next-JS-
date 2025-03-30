import { example } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import { useState } from "react";
import Image from "next/image";

const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="expertise bg-top projects-section">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="DETALLE" />
          <br />
          <br />
          <Title title="Conoce más sobre este proyecto" className="title-bg" />
        </div>
        <div className="hero-content">
          {example.map((example) => (
            <>
              <div className="main-content">
                <div className="image-section">
                  {example.mainImage ? (
                    <Image
                      src={example.mainImage}
                      alt={example.title || "Project Image"}
                      width={600}
                      height={400}
                      className="main-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <div className="details-section">
                  <h1>{example.title || "Untitled Project"}</h1>
                  <p>{example.description || "No description available."}</p>
                  <p>
                    <strong>Type:</strong> {example.type || "N/A"}
                  </p>
                </div>
              </div>
              <div className="carousel">
                <h2>Más imágenes</h2>
                <div className="carousel-images">
                  {example.images && example.images.length > 0 ? (
                    example.images.map((image, index) => (
                      <div
                        key={index}
                        className="carousel-item"
                        onClick={() => openImage(image)}
                      >
                        <Image
                          src={image}
                          alt={`Image ${index + 1}`}
                          width={200}
                          height={200}
                        />
                      </div>
                    ))
                  ) : (
                    <p>No additional images available</p>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="off-canvas" onClick={closeImage}>
          <div className="off-canvas-content">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={800}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
