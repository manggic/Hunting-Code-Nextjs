import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="navbar">
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
      <style jsx>
        {`
          .navbar ul {
            display: flex;
    justify-content: center;
    margin-top: 20px;
          }

          .navbar ul a {
            margin: 0px 23px;
            list-style: none;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
