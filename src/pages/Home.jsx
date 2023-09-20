import { Link } from "react-router-dom";
import hero from "../img/home-hero.png";

export default function Home() {
  return (
    <div className="text-center px-5">
      <div className="relative blur-md brightness-50">
        <img src={hero} alt="" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <h1 className="text-4xl font-bold text-center my-4">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="my-4 text-">
          Add adventure to your life by joining the{" "}
          <span className="text-success text-xl">#vanlife</span> movement. Rent
          the perfect van to make your perfect road trip.
        </p>
        <Link className="btn btn-success" to="/vans">
          Find your van
        </Link>
      </div>
    </div>
  );
}
