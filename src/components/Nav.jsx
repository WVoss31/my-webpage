import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Divider,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { faTerminal, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { name: "Home", path: "/my-webpage" },
  // { name: "Work Experience", path: "/my-webpage/career" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  // { name: "About Me", path: "/my-webpage/about" },
];

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

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
      <NavbarContent className="flex">
        <NavbarBrand>
          <Link color="foreground" href="/my-webpage">
            <FontAwesomeIcon icon={faTerminal} />
            <p className="font-bold text-inherit ml-2">Walker Voss</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="end">
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
              <Divider orientation="horizontal" />
              <NavbarMenuItem>
                <Button
                  color={theme === "dark" ? "default" : "secondary"}
                  variant="ghost"
                  onClick={() =>
                    theme === "dark" ? setTheme("light") : setTheme("dark")
                  }
                >
                  <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                  <span className="ml-2">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </Button>
              </NavbarMenuItem>
            </NavbarMenu>
          </>
        ) : (
          <>
            {navItems.map((item) => (
              <NavbarItem key={item.path} isActive={currentPath === item.path}>
                <Link
                  color={currentPath === item.path ? undefined : "foreground"}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}

            <Divider orientation="vertical" />
            <NavbarItem>
              <Button
                isIconOnly
                color="default"
                variant="light"
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
