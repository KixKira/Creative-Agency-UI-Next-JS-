import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export const CardHorizontal = ({ data, path, caption }) => {
  return (
    <div className="card-horizontal">
      <div className="card-horizontal-img">
        <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-horizontal-content">
        <h3 className="card-horizontal-title">{data.title}</h3>
        <h4 className="card-horizontal-subtitle">{data.subtitle}</h4>
        <p className="card-horizontal-description">{data.catgeory}</p>
        {caption && (
          <Link href={`${path}/${data.id}`}>
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};
