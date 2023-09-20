import bgImg from "../img/home-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-4">
      <div className="relative blur-md brightness-50">
        <img src={bgImg} className="about-hero-image" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <div className="about-page-content">
          <h1 className="text-4xl font-bold text-center my-4">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="my-2 text-xl">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="my-2 text-xl">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-page-cta text-xl">
          <h2 className="text-success">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <div className="flex justify-center items-center">
            <Link
              className="btn btn-danger mt-4 text-center text-white"
              to="/vans"
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
