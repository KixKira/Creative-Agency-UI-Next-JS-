import Head from "next/head";
import { showcase, showcaseDetail } from "@/assets/data/dummydata";
import Contact from "@/sections/Contact";

function getYouTubeEmbed(url) {
  if (!url) return "";
  // already an embed url
  if (url.includes("/embed/")) return url;

  // ?v= param
  const m = url.match(/[?&]v=([^&#]+)/);
  if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}`;

  // youtu.be short link
  const short = url.match(/youtu\.be\/([^?&#/]+)/);
  if (short?.[1]) return `https://www.youtube.com/embed/${short[1]}`;

  // watch?v= style fallback (replace)
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  // otherwise return empty to indicate unsupported format
  return "";
}

export default function Reel({ item }) {
  const embedUrl = item ? getYouTubeEmbed(item.videoCover || "") : "";
  if (process.env.NODE_ENV === "development") {
    // debug: log videoCover and computed embedUrl
    // eslint-disable-next-line no-console
    console.log(
      "reel item.videoCover=",
      item?.videoCover,
      "embedUrl=",
      embedUrl
    );
  }

  return (
    <>
      <Head>
        <title>{item ? item.title : "Reel"}</title>
      </Head>

      <section className="post-details reel-page">
        <div className="container">
          <div className="heading-title">
            <h1>{item ? item.title : "Reel Especial"}</h1>
            <p className="lead">
              Una pieza exclusiva: lo último en cine y contenido por Stefano
              Iovi
            </p>
          </div>

          <div className="reel-video">
            {embedUrl ? (
              <div className="video-inner">
                <iframe
                  src={embedUrl}
                  title={item ? item.title : "Reel"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="no-video">No hay video disponible.</div>
            )}
          </div>

          <div className="reel-desc">
            <h2>Descripción</h2>
            <p
              className="desc-p"
              dangerouslySetInnerHTML={{ __html: item ? item.subtitle : "" }}
            />
          </div>
        </div>
      </section>

      {/* Contact form section (reusing existing Contact section) */}
      <Contact />
    </>
  );
}

// no prop-types to avoid adding extra dependency

export async function getStaticProps() {
  // Try to find the item in both `showcase` and `showcaseDetail`.
  // Some entries (like id=10) are stored in `showcaseDetail` in the data file.
  const item =
    showcase.find((s) => s.id === 10) ||
    showcaseDetail.find((s) => s.id === 10) ||
    null;
  // debug server-side
  // eslint-disable-next-line no-console
  console.log("getStaticProps item=", item);
  return { props: { item } };
}
