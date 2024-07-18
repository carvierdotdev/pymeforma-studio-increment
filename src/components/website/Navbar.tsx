import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  return (
    <FlowbiteNavbar
      fluid={true}
      rounded={true}
      className="fixed start-0 top-0 z-20 w-full border-b xl:px-12"
    >
      <NavbarBrand as={Link} href="https://pymeforma.com">
        <img
          src="/FrameLogo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Pymeforma Studio Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pymeforma Studio
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#hero-text" active>
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} href="#cta-text">
          Sobre nosotros
        </NavbarLink>
        <NavbarLink href="#social-media-text">Redes Sociales</NavbarLink>
        <NavbarLink href="#website-text">Sitios web</NavbarLink>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
