import type { NavMenuLink } from "../types/nav-menu-link";

import Home from "../assets/icons/home.svg";
import SolarSystem from "../assets/icons/solar-system.svg";
import Galaxy from "../assets/icons/galaxy.svg";

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
    {
        title : "Galaxias",
        subMenu : [
            {
                title: "Vía Láctea"
            },
            {
                title: "Andrómeda"
            },
            {
                title: "Enana del Can Mayor"
            },
            {
                title: "Enana elíptica de Sagitario"
            }
        ],
        icon: Galaxy
    },
    {
        title: "Agujeros negros",
        subMenu: [
            {
                title: "Sagitario A*"
            },
            {
                title: "TON 618"
            },
            {
                title: "Gaia BH1"
            }
        ]
    }
]