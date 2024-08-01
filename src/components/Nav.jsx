import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
  } from "@nextui-org/react";
  import { useLocation } from "react-router-dom";
  import ViteLogo from "/vite.svg";
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Click to Test", path: "/test" },
    { name: "Test2, Electric Boogaloo", path: "/projects" },
  ];
  
  export default function MyNavbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
      <Navbar shouldHideOnScroll isBordered >
        <NavbarBrand className="justify-start">
          <Link color="foreground" href="/">
            <img src={ViteLogo} alt="Vite Logo" className="h-8" />
            <p className="font-bold text-inherit ml-2">Walker Voss</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" >
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
        </NavbarContent>
      </Navbar>
    );
  }
  