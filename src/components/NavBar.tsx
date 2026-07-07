import {
  cartIcon,
  companyLogo,
  companyName,
  locationIcon,
  lockIcon,
  navLinks,
  searchBarPlaceHolder,
  searchIcon,
} from "@/data/navlinks-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typography from "./typography/Typography";

function NavBar() {
  return (
    <nav className="max-w-270 flex justify-between items-center lg:mx-auto md:mx-10 mx-4 my-9.5">
      <div>
        <Link href="/" className="flex items-center gap-5">
          <Image alt="Company Logo" src={companyLogo} height={24} width={24} />
          <Typography variant="h6" as="span" weight="semibold">
            {companyName}
          </Typography>
        </Link>
      </div>

      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="md:block hidden">
          <Typography variant="body-sm">{link.text}</Typography>
        </Link>
      ))}

      <div className="gap-2 md:flex hidden">
        <div className="bg-white flex justify-center items-center aspect-square w-8.75 rounded-[11px] border border-[#33333340]">
          <Image
            alt="location icon"
            src={locationIcon}
            height={18}
            width={18}
          />
        </div>
        <div className="relative">
          <Image
            alt="location icon"
            src={searchIcon}
            className="absolute top-0 left-2.5 translate-y-1/2"
            height={18}
            width={18}
          />
          <input
            type="text"
            className="bg-white h-8.75 lg:w-79.25 w-50 rounded-[11px] font-poppins font-thin text-[12px] px-9.5 border border-[#33333340]"
            placeholder={searchBarPlaceHolder}
          />
        </div>
      </div>
      <div className=" gap-5 md:flex hidden">
        <Link href="/cart">
          <Image alt="cart" src={cartIcon} height={18} width={18} />
        </Link>
        <Link href="/cart">
          <Image alt="cart" src={lockIcon} height={18} width={18} />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
