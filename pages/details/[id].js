import { showcaseDetail } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const project = showcaseDetail.find((item) => item.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const isVideo = () => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    return videoExtensions.some((ext) => project.cover.includes(ext));
  };

  return (
    <section className="expertise bg-top projects-section">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="DETALLE" />
          <br />
          <br />
          <Title
            title={`Conoce más sobre ${project.title}`}
            className="title-bg"
          />
        </div>
        <div className="hero-content">
          <div className="main-content">
            <div className="image-section">
              {project.cover ? (
                isVideo(project.cover) ? (
                  <video
                    src={project.cover}
                    controls
                    width={600}
                    height={400}
                    className="main-video"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={project.cover}
                    alt={project.title || "Project Image"}
                    width={600}
                    height={400}
                    className="main-image"
                  />
                )
              ) : (
                <p>No cover available</p>
              )}
            </div>
            <div className="details-section">
              <h1 className="title">{project.title || "Untitled Project"}</h1>
              <p>{project.subtitle || "No description available."}</p>
              <p>
                <strong>Type:</strong> {project.catgeory || "N/A"}
              </p>
            </div>
          </div>
          <div className="carousel">
            <h2>Más imágenes</h2>
            <div className="carousel-images">
              {project.images && project.images.length > 0 ? (
                project.images.map((image, index) => (
                  <div
                    key={index}
                    className="carousel-item"
                    onClick={() => openImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={300}
                      height={200}
                    />
                  </div>
                ))
              ) : (
                <p>No additional images available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="off-canvas" onClick={closeImage}>
          <div className="off-canvas-content">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={1000}
              height={650}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
