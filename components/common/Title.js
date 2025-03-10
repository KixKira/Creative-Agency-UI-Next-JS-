import Image from "next/image";
import Logo from "../../assets/images/ju_logo.png";

export const TitleLogo = () => {
  return <Image src={Logo} alt="Logo" width={200} height={200} />;
};

export const TitleSm = ({ title }) => {
  return <h1 className="titleSm">{title}</h1>;
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};
