import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo/logo.png";
import "./index.scss";

export default function Header() {
  return (
    <>
      {/* Header Top */}
      <section className="Headertop">
        {/* Search Section Start */}
        <div className="SearchSection">
          <input type="search" placeholder="Search" />
        </div>
        {/* Search Section End */}

        {/* Website Logo */}
        <div className="WebsiteLogo">
          <Image src={Logo} />
        </div>
        {/* Website Logo */}

        {/* Header Right Section */}
        <div className="HeaderRight">
          {/* Authentication */}
          <div className="HeaderRightAuthentication">
            <a href="#">Register</a>
            <p>/</p>
            <a href="#">Login</a>
          </div>
          {/* Authentication */}

          {/* Header Icons */}
          <div className="HeaderIcons">
            <IconButton>
              <FaRegHeart color="#3d5f00" />
            </IconButton>
            <IconButton>
              <FaCartPlus color="#3d5f00" />
            </IconButton>
          </div>
        </div>
        {/* Header Right Section */}
      </section>

      {/* Header */}
      <section className="Header">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </section>
      {/* Header */}
    </>
  );
}
