import type { NavMenuLink } from "../types/nav-menu-link";

import Home from "../assets/icons/home.svg";
import SolarSystem from "../assets/icons/solar-system.svg";
import Galaxy from "../assets/icons/galaxy.svg";
import Rocket from "../assets/icons/rocket.svg";

export const NavMenuLinks: NavMenuLink[] = [
    {
        title: "Inicio",
        url: "/",
        icon: Home
    },
    {
        title: "Últimos descubrimientos",
    },
    {
        title: "El Sistema solar",
        url: "/sistema-solar",
        icon: SolarSystem
    },
    {
        title: "Misiones espaciales",
        subMenu : [
            {
                title: "Apolo",
                subMenu: [
                    {
                        title: "Apolo 11"
                    }
                ]
            },
            {
                title: "Artemis",
                subMenu: [
                    {
                        title: "Artemis I"
                    },
                    {
                        title: "Artemis II"
                    },
                    {
                        title: "Artemis III"
                    }
                ]
            },
            {
                title: "MARS 2020 - PERSEVERANCE ROVER"
            },
            {
                title: "Voyager",
                subMenu: [
                    {
                        title: "Voyager 1"
                    },
                    {
                        title: "Voyager 2"
                    }
                ]
            }
        ],
        icon: Rocket
    },
    {
        title: "Vida extraterrestre",
        subMenu: [
            {
                title: "¿Hay vida en otros planetas y galaxias?"
            },
            {
                title: "¿Vida extraterrestre en el Sistema solar?"
            },
            {
                title: 'SEÑAL "WOW"'
            }
        ]
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