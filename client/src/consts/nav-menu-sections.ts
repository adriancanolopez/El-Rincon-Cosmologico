import type { NavMenuLink } from "../types/nav-menu-link";
import Rocket from "../assets/icons/rocket.svg";
import Galaxy from "../assets/icons/galaxy.svg";

export const MISSIONS: NavMenuLink = {
    title: "Misiones espaciales",
    url: "/misiones/",
    icon: Rocket
};

export const ARTICLES: NavMenuLink = {
    title: "Artículos",
    url: "/articulos/"
};

export const DISCOVERIES: NavMenuLink = {
    title: "Últimos descubrimientos",
    url: "/articulos/descubrimientos"
};

export const GALAXIES: NavMenuLink = {
    title: "Galaxias",
    url: "/galaxias/",
    icon: Galaxy
};

export const BLACK_HOLES: NavMenuLink = {
    title: "Agujeros negros",
    url: "/agujeros-negros/"
}