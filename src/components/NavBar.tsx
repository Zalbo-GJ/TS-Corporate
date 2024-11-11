export default function NavBar() {
  return (
    <div className="bg-white">
      <nav className="container mx-auto p-4 flex  md:flex-row justify-between items-center">
        <div className="text-2xl text-black mb-4 md:mb-0">TS</div>
        <ul className="flex items-center md:flex-row space-x-3 md:space-y-0 md:space-x-8  text-xs md:text-lg ">
          <li>
            <a href="/#home" className="text-black hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/#services" className="text-black hover:text-gray-400">
              Services
            </a>
          </li>{" "}
          <li>
            <a
              href="/partners-and-clients"
              className="text-black hover:text-gray-400"
            >
              Clients & Partners
            </a>
          </li>{" "}
          <li>
            <a href="/projects" className="text-black hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-black hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
