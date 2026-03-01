import type { NavMenuLink } from "../types/nav-menu-link";

import Home from "../assets/icons/home.svg";
import SolarSystem from "../assets/icons/solar-system.svg";

export const NavMenuLinks: NavMenuLink[] = [
    {
        title: "Inicio",
        url: "/",
        icon: Home
    },
    {
        title: "El Sistema solar",
        url: "/sistema-solar",
        icon: SolarSystem
    },
]