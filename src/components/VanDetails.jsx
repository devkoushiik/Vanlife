import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const [van, setVan] = useState([]);
  const [toggle, setToggle] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  return (
    <div className="justify-center flex items-center">
      {van ? (
        <div className="card mt-2 w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={van.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{van.name}</h2>
            <div className="badge badge-secondary p-4 text-xl">
              ${van.price}
            </div>
            <p>
              {!toggle ? van.description?.slice(0, 80) : van.description}...
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => setToggle(!toggle)}
                className="btn btn-primary"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default VanDetails;
