import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Menu } from "../../Context/MenuContext.jsx";

const Topbar: React.FC = () => {
  const menu = useContext(Menu);
  const setIsOpen = menu?.setIsOpen;

  return (
    <div className="top-bar d-flex align-items-center justify-content-between px-4 py-2">
      <div className="d-flex align-items-center px-1 col-8">
        <h1 className="fs-4 fw-bold px-2 ">
          <img src="/vite.svg" className="px-1" alt="Vite Logo" />
          Mege Users
        </h1>
        <FontAwesomeIcon
          onClick={() => setIsOpen!((prev) => !prev)}
          className="fs-4 px-4 "
          style={{ cursor: "pointer" }}
          icon={faBars}
        />
        <div className="search-container col-6 ms-5 d-lg-block d-none">
          <div className="input-group position-relative ">
            <input
              type="text"
              placeholder="Search"
              className="form-control fs-6 rounded p-2"
            />
            <div
              className="input-group-append position-absolute end-0 top-50 me-1"
              style={{ transform: "translateY(-50%)" }}
            >
              <span className="input-group-text bg-danger rounded-end">
                <FontAwesomeIcon
                  className="fs-5 px text-white"
                  icon={faSearch}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          className="fs-5 px-4 "
          icon={faBell}
          style={{ cursor: "pointer" }}
        />
        <div
          className="rounded-circle overflow-hidden border border-warning"
          style={{ width: "40px", height: "40px" }}
        >
          <img src="/d.jpg" alt="Profile" className="w-100 h-100 " />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
