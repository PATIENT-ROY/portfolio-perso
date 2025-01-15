import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 ">
      <a href="#" className="flex items-center  font-bold  text-3xl md:text-xl">
        <Container className="mr-2" />
        ROY
        <span className="text-accent">DEV</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            About
          </a>
        </li>

        <li>
          <a href="#Experiences" className="btn btn-sm btn-ghost">
            Experiences
          </a>
        </li>

        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost">
            My Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
