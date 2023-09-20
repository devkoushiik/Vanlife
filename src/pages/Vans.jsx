import { useEffect, useState } from "react";
import Vanelements from "../components/Vanelements";

const Vans = () => {
  const [vans, setVans] = useState([]);

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
        <div className="van-container">
          <Vanelements vans={vans} />
        </div>
      </div>
    </div>
  );
};
export default Vans;
