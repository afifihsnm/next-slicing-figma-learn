import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-3">
      <img src="./header-bg.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      <nav className="flex justify-center sm:justify-between">
        <Link href="/" className="hidden sm:block">
          Madelyn Torff
        </Link>

        <div className="flex gap-10">
          <Link href="/about">
            About
          </Link>
          <Link href="/">
            Projects
          </Link>
          <Link href="/">
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;