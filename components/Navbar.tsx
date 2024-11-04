"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="py-3">
      <nav className="flex justify-center sm:justify-between">
        <Link href="/" className="hidden sm:block">
          Afif Ihsan Maulana
        </Link>

        <div className="flex gap-10">
          {pathname == "/about" ? (
            <Link href="/about" className="underline underline-offset-[16px] decoration-black decoration-2">
              About
            </Link>
          ) : (
            <Link href="/about">
              About
            </Link>
          )}
          <Link href="#projects">
            Projects
          </Link>
          <Link href="#contacts">
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;