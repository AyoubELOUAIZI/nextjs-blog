import { Sailboat } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar  bg-red-100">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Sailboat color="#ff3838" size="50px" /> MyBrand
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create-post" className="btn btn-ghost">
            create post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
