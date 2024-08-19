import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CodeSquare from "../assets/code-square.svg"


const navItems = [
  { name: "Home", path: "/" },
  { name: "Work Experience", path: "/career" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "About Me", path: "/about" },
];

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="hidden flex">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <img src={CodeSquare} alt="Terminal Logo" className="h-8" />
            <p className="font-bold text-inherit ml-2">Walker Voss</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden flex gap-4" justify="end">
        {isMobile || window.innerWidth < 720 ? (
          <>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            />
            <NavbarMenu>
              {navItems.map((item) => (
                <NavbarMenuItem
                  key={item.name}
                  isActive={currentPath === item.path}
                >
                  <Link
                    color={currentPath === item.path ? undefined : "foreground"}
                    className="w-full"
                    href={item.path}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </>
        ) : (
          navItems.map((item) => (
            <NavbarItem key={item.path} isActive={currentPath === item.path}>
              <Link
                color={currentPath === item.path ? undefined : "foreground"}
                href={item.path}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))
        )}
      </NavbarContent>
    </Navbar>
  );
}
