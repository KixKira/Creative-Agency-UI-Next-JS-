import { showcaseDetail } from "@/assets/data/dummydata";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const ProjectDetails = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const project = showcaseDetail.find((item) => item.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const openMedia = (media) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ["mp4", "webm", "ogg"];
    return videoExtensions.some((ext) => url.includes(ext));
  };

  const isYouTubeLink = (url) => {
    if (!url) return false;
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <Head>
        <title>Juweare | {project.title || "Detalles del Proyecto"}</title>
        <meta
          name="description"
          content={project.subtitle || "Detalles del Proyecto"}
        />
      </Head>
      <section className="expertise bg-top projects-section">
        <div className="container">
          <div className="heading-title" />
          <div className="hero-content">
            <div className="main-content">
              <div className="image-wrapper">
                {isYouTubeLink(project.videoCover) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(project.videoCover)}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    width={600}
                    height={400}
                    className="main-video"
                  ></iframe>
                ) : (
                  <Image
                    src={project.cover}
                    alt={project.title || "Project Image"}
                    width={600}
                    height={400}
                    className="main-image"
                  />
                )}
              </div>
              <div className="details-section">
                {project.title && (
                  <h1 className="title title-detail">
                    {project.title}
                    <br />
                  </h1>
                )}
                {project.category && <p className="test">{project.category}</p>}
                {project.subtitle && <p>{project.subtitle}</p>}
                <p className="category">
                  {project.agency && (
                    <>
                      <strong>Agencia: {project.agency}</strong>
                      <br />
                    </>
                  )}
                  {project.production && (
                    <>
                      <strong>Producción: {project.production}</strong>
                      <br />
                    </>
                  )}
                  {project.executiveProduction && (
                    <>
                      <strong>
                        Producción Ejecutiva: {project.executiveProduction}
                      </strong>
                      <br />
                    </>
                  )}
                  {project.technicalProduction && (
                    <>
                      <strong>
                        Producción Técnica: {project.technicalProduction}
                      </strong>
                      <br />
                    </>
                  )}
                  {project.direction && (
                    <>
                      <strong>Dirección: {project.direction}</strong>
                      <br />
                    </>
                  )}
                  {project.photography && (
                    <>
                      <strong>Fotografía: {project.photography}</strong>
                      <br />
                    </>
                  )}
                  {project.fixedPicture && (
                    <>
                      <strong>Foto Fija: {project.fixedPicture}</strong>
                      <br />
                    </>
                  )}
                  {project.camera && (
                    <>
                      <strong>Cámara: {project.camera}</strong>
                      <br />
                    </>
                  )}
                  {project.edition && (
                    <>
                      <strong>Edición: {project.edition}</strong>
                      <br />
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="carousel">
              <h2>Más imágenes y videos</h2>
              <div className="carousel-images">
                {project.videos &&
                  project.videos.length > 0 &&
                  project.videos.map((video, index) => (
                    <div
                      key={index}
                      className="carousel-item image-wrapper"
                      onClick={() => openMedia(video)}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${
                          video.split("v=")[1]?.split("&")[0] ||
                          video.split("/").pop()
                        }/hqdefault.jpg`}
                        alt={`YouTube Thumbnail ${index + 1}`}
                        width={300}
                        height={200}
                        className="carousel-image"
                      />
                    </div>
                  ))}
                {project.images &&
                  project.images.length > 0 &&
                  project.images.map((media, index) => (
                    <div
                      key={index}
                      className="carousel-item image-wrapper"
                      onClick={() => openMedia(media)}
                    >
                      {isVideo(media) ? (
                        <video
                          src={media}
                          className="carousel-video"
                          width={300}
                          height={200}
                          muted
                        />
                      ) : (
                        <Image
                          src={media}
                          alt={`Image ${index + 1}`}
                          width={300}
                          height={200}
                          className="carousel-image"
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {selectedMedia && (
          <div className="off-canvas" onClick={closeMedia}>
            <div
              className="off-canvas-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="image-wrapper-canvas">
                {isYouTubeLink(selectedMedia) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(selectedMedia)}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    width={1280}
                    height={720}
                    className="off-canvas-video"
                  ></iframe>
                ) : isVideo(selectedMedia) ? (
                  <video
                    src={selectedMedia}
                    controls
                    className="off-canvas-video"
                    width={800}
                    height={600}
                  />
                ) : (
                  <Image
                    src={selectedMedia}
                    alt="Selected Media"
                    width={800}
                    height={600}
                    className="off-canvas-image"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectDetails;
