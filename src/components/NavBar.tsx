export default function NavBar() {
  return (
    <div className="bg-white">
      <nav className="container mx-auto p-4  flex justify-between items-center">
        <div className="text-2xl text-black  ">TS</div>
        <ul className="flex space-x-24">
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
