"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="bg-slate-600">
          <ul className="flex justify-center items-center gap-5 pt-1">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/posts"}>
              <li>Posts</li>
            </Link>
            
          </ul>
        </nav>
      </div>
    );
  }
  else{
    return <></>
  }
};

export default Navbar;
