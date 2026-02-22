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
        url: "/misiones",
        subMenu : [
            {
                title: "Apolo",
                url: "/misiones/apollo",
                subMenu: [
                    {
                        title: "Apolo 11",
                        url: "/misiones/apollo/apollo-11"
                    }
                ]
            },
            {
                title: "Artemis",
                url: "/misiones/artemis",
                subMenu: [
                    {
                        title: "Artemis I",
                        url: "/misiones/artemis/artemis-i",
                    },
                    {
                        title: "Artemis II",
                        url: "/misiones/artemis/artemis-ii",
                    },
                    {
                        title: "Artemis III",
                        url: "/misiones/artemis/artemis-iii",
                    }
                ]
            },
            {
                title: "MARS 2020 - PERSEVERANCE ROVER",
                url: "/misiones/mars-2020",
            },
            {
                title: "Voyager",
                url: "/misiones/voyager",
                subMenu: [
                    {
                        title: "Voyager 1",
                        url: "/misiones/voyager/voyager-1",
                    },
                    {
                        title: "Voyager 2",
                        url: "/misiones/voyager/voyager-2",
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