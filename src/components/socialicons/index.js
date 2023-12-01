import React from "react";
import "./style.css";
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedin, FaTiktok } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagaram && (
          <li>
            <a href={socialprofils.instagaram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.tiktok && (
          <li>
            <a href={socialprofils.tiktok}>
              <FaTiktok />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
