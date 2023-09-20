import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className="container">
      <div className="header-container">
        <header style={{ display: "flex", gap: "2" }} className="header">
          <div>
            <header>
              <Link style={{ fontSize: "23px", marginRight: "10px" }} to={"/"}>
                #VANLIFE
              </Link>
            </header>
          </div>
          <nav style={{ fontSize: "26px" }}>
            <Link style={{ paddingLeft: "10px" }} to={"/"}>
              Home
            </Link>
            <Link to={"/about"}>About</Link>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Container;
