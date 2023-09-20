import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const [van, setVan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  if (!van)
    return <span className="loading loading-infinity loading-md"></span>;

  return (
    <section>
      <Link to={".."} relative="path">
        <span
          className="flex flex-start ml-10 text-2xl
        "
        >
          &larr; Back to all vans
        </span>
      </Link>

      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={van.imageUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{van.name}</h2>
            <h2 className="card-title">{van.price}</h2>
            <div className="card-actions">
              <button className="btn btn-primary">{van.type}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-2 text-xl ">
        <nav>
          <Link className="px-2 hover:underline" to="." end>
            Details
          </Link>
          <Link className="px-2 hover:underline" to="pricing">
            Pricing
          </Link>
          <Link className="px-2 hover:underline" to="photos">
            Photos
          </Link>
        </nav>
      </div>
      <Outlet context={{ van }} />
    </section>
  );
};
export default HostVanDetails;
