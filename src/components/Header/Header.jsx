import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="flex  justify-center items-center flex-col">
        <img className="w-96" src={logo} alt="" />
        <p className="text-lg font-semibold">
          Journalism without Fear or Favour
        </p>
        <div>
          <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
      </div>
      <div className="flex gap-4 my-5">
        <button className="btn btn-outline">Breaking news</button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
          I can be a React component, multiple React components, or just some
          text.
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
};

export default Header;
