import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export const CardHorizontal = ({ data, path, caption }) => {
  return (
    <div className="card-horizontal">
      <div className="card-horizontal-img">
        <Link href={`details/${data.id}`}>
          <img src={data.cover} alt={data.title} />
        </Link>
      </div>
      <div className="card-horizontal-content">
        <h3 className="card-horizontal-title title">{data.title}</h3>
        <h4
          className="card-horizontal-subtitle"
          dangerouslySetInnerHTML={{ __html: data.subtitle }}
        />
        <div className="card-horizontal-separator" />
        <p className="card-horizontal-description">{data.category}</p>
        {caption && (
          <Link href={`details/${data.id}`}>
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};
