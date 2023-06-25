import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { getAuthSession } from "@/lib/authConfig";
import Avatar from "./Avatar";
import { Session } from "next-auth";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            className="object-contain"
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
          />
        </Link>
        {session?.user ? (
          <Avatar user={session.user} />
        ) : (
          <Link href="/sign-in">
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white"
            />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
