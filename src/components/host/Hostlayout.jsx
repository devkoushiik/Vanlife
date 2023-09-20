import { Link, Outlet } from "react-router-dom";

const Hostlayout = () => {
  return (
    <div>
      <nav className="flex text-white p-5">
        <Link className="text-xl px-2" to="/host">
          Dashboard
        </Link>
        <Link className="text-xl px-2" to="income">
          Income
        </Link>
        <Link className="text-xl px-2" to="reviews">
          Reviews
        </Link>
        <Link className="text-xl px-2" to="vans">
          Vans
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};
export default Hostlayout;
