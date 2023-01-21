import "../styles/Banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  const title = "Plantifoliz";
  return (
    <div className="banner">
      <img className="logo" src={logo} alt="logo plantifoliz feuille verte" />
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Banner;
