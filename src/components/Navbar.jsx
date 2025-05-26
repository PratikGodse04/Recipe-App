import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [searchVal, setSearchVal] = useState("");

  const onChangeValue = (event) => {
    setSearchVal(event.target.value);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ paddingLeft: " 50px", paddingRight: "50px",position:"sticky" ,top:0,zIndex:10 }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontFamily: "cursive",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            Recipe App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/feedback">
                  FeedBack
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Any Dish Here"
                aria-label="Search"
                value={searchVal}
                onChange={onChangeValue}
              />
              <Link
                to={`/search/${searchVal}`}
               
              >
                <button
                  className="btn btn-outline-success"
                  type="submit"
                
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
