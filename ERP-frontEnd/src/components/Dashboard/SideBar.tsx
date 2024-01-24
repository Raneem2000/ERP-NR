import React, { useContext, useState } from "react";
import { links } from "./NavLinks";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import {
  faUsers,
  faAngleDown,
  faAngleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext.jsx";
import { WindowSize } from "../../Context/WindowContext.jsx";

const SideBar: React.FC = () => {
  const [open, setOpen] = useState<number>(1);
  const menu = useContext(Menu);
  const isOpen = menu?.open;

  const WindowContext = useContext(WindowSize);
  const windowSize = WindowContext?.windowSize;

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: "100px",
          left: "0",
          backgroundColor: "rgba(0, 0 ,0, 0.3)",
          display: windowSize! < 768 && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-4"
        style={{
          left: windowSize! < 768 ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "250px" : "fit-content",
          position: windowSize! < 768 ? "fixed" : "sticky",
          overflowY: "scroll",
        }}
      >
        {links.map((link, key: number) => (
          <NavLink
            key={key}
            to={link.path}
            className="d-flex align-items-center gap-2 side-bar-link position-relative"
          >
            <FontAwesomeIcon icon={link.icon} />
            <p
              className="m-0"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              {link.name}
            </p>
            {link.dropdown && (
              <FontAwesomeIcon
                onClick={() => setOpen(link.id)}
                icon={faAngleRight}
                style={{ transform: open === link.id ? "rotate(90deg)" : "" }}
                className="position-absolute end-0 me-3"
              />
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SideBar;
