import {
  RiEarthFill,
  BsGithub,
  ImFacebook,
  BsTwitter,
} from "../components/ReactIcons";

export const navbarItems = [
  {
    title: "marketplace",
    url: "/product",
  },
  {
    title: "favorites",
    url: "/account/favorites",
  },
];

export const footerAboutLinks = [
  { title: "Toysory", link: "/" },
  { title: "policies", link: "/" },
  { title: "investors", link: "/" },
  { title: "careers", link: "/" },
];

export const socialLinks = [
  { title: "homePage", link: "/", icon: <RiEarthFill /> },
  {
    title: "github",
    link: "https://github.com/LIONSHI01",
    icon: <BsGithub />,
  },
  { title: "facebook", link: "/", icon: <ImFacebook /> },
  { title: "twitter", link: "/", icon: <BsTwitter /> },
];
