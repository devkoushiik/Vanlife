import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between text-white p-5">
      <Link className="site-logo text-3xl font-bold underline" to="/">
        #VanLife
      </Link>
      <nav className="mx-4 flex items-center text-xl">
        <Link className="mr-4" to="/about">
          About
        </Link>
        <Link className="mr-4" to="/vans">
          Vans
        </Link>
        <Link className="mr-4" to="/host">
          Host
        </Link>
      </nav>
    </header>
  );
};
export default Header;
