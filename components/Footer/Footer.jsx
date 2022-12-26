import React from "react";
import Link from "next/link";
import Image from "next/image";

import { SiMinutemailer } from "../ReactIcons/index";
import { footerAboutLinks, socialLinks } from "../../assets/constants";

import logoImage from "../../assets/brand/logo.png";
import {
  MasterFramworkWrapper,
  LogoColWrapper,
  BusinessColWrapper,
  SocialsColWrapper,
  EmailBarContainer,
  FooterContainer,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <MasterFramworkWrapper>
        <LogoColWrapper>
          <Image
            src={logoImage}
            alt="logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </LogoColWrapper>
        <BusinessColWrapper>
          <h4 className="about_col_heading">About</h4>
          <div className="about_col_links">
            {footerAboutLinks?.map(({ title, link }) => (
              <Link key={title} href={link}>
                <a className="about_col_link">{title}</a>
              </Link>
            ))}
          </div>
        </BusinessColWrapper>
        <SocialsColWrapper>
          <div className="socials_heading">Subscribe to our news letter</div>
          <EmailBarContainer>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="example@gmail.com" />
              <button className="btn_container" type="submit">
                <SiMinutemailer size={20} className="icon" />
              </button>
            </form>
          </EmailBarContainer>
          <div className="socials_col_links">
            {socialLinks?.map(({ link, icon }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="socials_col_link"
              >
                <div className="socials_col_icon_box">{icon}</div>
              </a>
            ))}
          </div>
        </SocialsColWrapper>
      </MasterFramworkWrapper>
    </FooterContainer>
  );
};

export default Footer;
