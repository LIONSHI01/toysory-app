import React from "react";
import Link from "next/link";
import { navbarItems } from "../../assets/constants";
import { IoMdClose } from "../ReactIcons";
import { IconButton, Overlay } from "../index";
import { SidebarContainer } from "./MobileSideBar.styles";

const MobileSideBar = ({ showup = true, setShowup }) => {
  const closeSidebarHandler = () => {
    setShowup(false);
  };

  return (
    <>
      <Overlay showup={showup} setShowup={setShowup} />
      <SidebarContainer showup={showup}>
        <div className="closeBtnContainer">
          <IconButton onClick={closeSidebarHandler}>
            <IoMdClose size={30} />
          </IconButton>
        </div>

        <ul className="links">
          {navbarItems.map(({ title, url }) => (
            <li className="item" key={title}>
              <Link href={url}>
                <a className="link" onClick={closeSidebarHandler}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarContainer>
    </>
  );
};

export default MobileSideBar;
