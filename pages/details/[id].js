import { showcaseDetail } from "@/assets/data/dummydata";
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

  const getOrientation = (width, height) => {
    return width > height ? "horizontal" : "vertical";
  };

  return (
    <section className="expertise bg-top projects-section">
      <div className="container">
        <div className="heading-title" />
        <div className="hero-content">
          <div className="main-content">
            {/* <div className="image-section"> */}
            <div className={`image-wrapper ${getOrientation(600, 400)}`}>
              {project.cover ? (
                isVideo(project.cover) ? (
                  <video src={project.cover} controls className="main-video">
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={project.cover}
                    alt={project.title || "Project Image"}
                    width={600}
                    height={400}
                    className={`main-image ${getOrientation(600, 400)}`}
                  />
                )
              ) : (
                <p>No cover available</p>
              )}
            </div>
            <div className="details-section">
              <h1 className="title title-detail">
                {project.title || "Untitled Project"}
              </h1>
              <p>{project.subtitle || "No description available."}</p>
              <p>
                <strong>Tipo:</strong> {project.catgeory || "N/A"}
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
                    className={`carousel-item image-wrapper ${getOrientation(
                      300,
                      200
                    )}`}
                    onClick={() => openImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={300}
                      height={200}
                      className={`carousel-image ${getOrientation(300, 200)}`}
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
          <div
            className="off-canvas-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-wrapper">
              <Image
                src={selectedImage}
                alt="Selected Image"
                layout="intrinsic" // Cambiado de "fill" a "intrinsic"
                width={800} // Ajusta el ancho según sea necesario
                height={600} // Ajusta la altura según sea necesario
                className="off-canvas-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
