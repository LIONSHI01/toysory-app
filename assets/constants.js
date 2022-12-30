import {
  RiEarthFill,
  BsGithub,
  ImFacebook,
  BsTwitter,
  AiFillHome,
  AiFillBehanceCircle,
  AiFillInstagram,
  FaPinterestP,
} from "../components/ReactIcons";

export const navbarItems = [
  {
    title: "marketplace",
    url: "/product",
  },
  {
    title: "favorites",
    url: "/account/favorite",
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
    title: "instagram",
    link: "/",
    icon: <AiFillInstagram />,
  },
  { title: "facebook", link: "/", icon: <ImFacebook /> },
  { title: "twitter", link: "/", icon: <BsTwitter /> },
  { title: "pinterest", link: "/", icon: <FaPinterestP /> },
];

export const AUTHOR_INFO = [
  { title: "homePage", link: "https://lionshi.io", icon: <AiFillHome /> },
  {
    title: "github",
    link: "https://github.com/LIONSHI01",
    icon: <BsGithub />,
  },
  {
    title: "behance",
    link: "https://www.behance.net/lionc",
    icon: <AiFillBehanceCircle />,
  },
];
