import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div>
      <HostVansEls data={vans} />
    </div>
  );
};

function HostVansEls({ data }) {
  return (
    <div className="ml-[15rem]">
      {data?.map((van) => {
        return (
          <Link to={`/host/vans/${van.id}`} key={van.id}>
            <div className="flex mb-4 ">
              {console.log(van.id)}
              <img className="" width={"100"} src={van.imageUrl} />
              <div className="text-xl mx-6">
                <h3>{van.name}</h3>
                <h3>{van.price}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default HostVans;
