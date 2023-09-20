import { Link, useSearchParams } from "react-router-dom";
const Vanelements = ({ vans, displayedVan }) => {
  return (
    <div className="van-list flex cursor-pointer flex-wrap justify-center items-center">
      {(vans || displayedVan).map((van) => {
        return (
          <Link key={van.id} to={`/vans/${van.id}`}>
            <div className="card border my-2 mx-2 border-solid-2 w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-3xl mt-3"
                  width="200"
                  src={van.imageUrl}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{van.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-info">{van.type}</button>
                  <button className="btn btn-primary">${van.price}</button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Vanelements;
