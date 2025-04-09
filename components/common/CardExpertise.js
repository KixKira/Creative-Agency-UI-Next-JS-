import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const CardExpertise = ({ data, caption, show, path }) => {
  return (
    <div className="card">
      <div className="card-img">
        <Link href={`experience/${data.id}`}>
          <img src={data.cover} alt={data.title} />
        </Link>
        {/* <img src={data.cover} alt={data.title} /> */}
      </div>
      <div className="card-details">
        <Link href={`experience/${data.id}`} className="title-link title">
          <TitleSm title={data.title} />
        </Link>
        {caption && (
          <Link href={`experience/${data.id}`}>
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}
        <div className="flex">
          <span> {data.catgeory} </span>{" "}
          {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
