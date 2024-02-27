"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { GithubLogo } from "@phosphor-icons/react";
import PMR from "../images/brand/PimpMyRide.png"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarItem>
          <Link href="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/media" color="foreground">
            Media
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={PMR.src} alt="PimpMyRide" width={75} height={75}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarBrand>
            <img src={PMR.src} alt="PimpMyRide" width={75} height={75}/>
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent justify="end">
        <Link href="https://github.com/TheRealDzox/PimpMyRide" color="foreground">
            <GithubLogo size={24} />
        </Link>
      </NavbarContent>

      <NavbarMenu>
          <NavbarMenuItem>
            <Link
              className="w-full"
              color={
                "foreground"
              }
              href="/"
              size="md"
            >
                Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              color={
                "foreground"
              }
              href="/media"
              size="md"
            >
                Media
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              color={
                "foreground"
              }
              href="/about"
              size="md"
            >
                About
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
