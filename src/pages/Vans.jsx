import { useEffect, useState } from "react";
import Vanelements from "../components/Vanelements";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  console.log(typeFilter);
  console.log(vans);

  const displayedVan = typeFilter
    ? vans.filter((van) => {
        if (van.type.toLowerCase() === typeFilter) return van;
      })
    : vans;

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl my-6 text-center text-white">
          Explore our van options
        </h1>

        <div>
          <div className="text-center my-2 text-teal-300 text-xl">
            <h1 className="mb-2 text-fuchsia-600">Filter By : </h1>
            <Link className="px-4" to="?type=simple">
              Simple
            </Link>
            <Link className="px-4" to="?type=luxury">
              Luxury
            </Link>
            <Link className="px-4" to="?type=rugged">
              Rugged
            </Link>
            <Link className="px-4" to=".">
              Clear
            </Link>
          </div>
        </div>

        <div className="van-container">
          <Vanelements vans={displayedVan ? displayedVan : vans} />
        </div>
      </div>
    </div>
  );
};
export default Vans;
