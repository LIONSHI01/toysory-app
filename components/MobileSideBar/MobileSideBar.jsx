import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { signOut } from "next-auth/react";
import { navbarItems } from "../../assets/constants";
import { IoMdClose } from "../ReactIcons";
import { IconButton, Overlay } from "../index";
import { SidebarContainer, UserInfoBox } from "./MobileSideBar.styles";

const MobileSideBar = ({ showup = true, setShowup }) => {
  const { status, data: session } = useSession();
  

  const username =
    session?.user?.email?.split("@")[0].length <= 10
      ? session?.user?.email?.split("@")?.[0]
      : ` ${session?.user?.email?.split("@")?.[0]?.slice(0, 10)} ...`;

  const closeSidebarHandler = () => {
    setShowup(false);
  };

  const signOutHandler = async () => {
    await signOut({ redirect: false });
    Router.push("/");
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
        {session && (
          <UserInfoBox>
            <p className="username">{username}</p>
          </UserInfoBox>
        )}
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
        <div className="navbar__authentication">
          {status === "unauthenticated" || status === "loading" ? (
            <div className="auth-box">
              <Link href="/auth/signin">
                <a className="link">Sign In</a>
              </Link>
              <Link href="/auth/register">
                <a className="link">Register</a>
              </Link>
            </div>
          ) : (
            <div className="accountBox">
              <Link href="/account">
                <a className="link">Account</a>
              </Link>
              <a className="signout-btn" onClick={signOutHandler}>
                Sign Out
              </a>
            </div>
          )}
        </div>
      </SidebarContainer>
    </>
  );
};

export default MobileSideBar;
