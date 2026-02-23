import type { CollectionEntry } from "astro:content";
import type { NavMenuLink } from "../../types/nav-menu-link";
import Rocket from "../../assets/icons/rocket.svg";

export function getMissionsMenu(programs: CollectionEntry<"programs">[], missions: CollectionEntry<"missions">[], independentMissions: CollectionEntry<"missions">[]): NavMenuLink {
    const urlPath = "/misiones/";

    const menu: NavMenuLink = {
        title: "Misiones espaciales",
        url: urlPath,
    }

    const programsAndMissions: NavMenuLink[] = [];

    programs.map((program) => {
        const { data, slug } = program;

        const programMissions = missions.filter((mission) => mission.data.program?.id === slug);
        const missionsSorted = programMissions.sort((a, b) => a.data.order - b.data.order); // Orden ascendente

        const navLink: NavMenuLink = {
            title: data.title,
            url: urlPath + slug,
            subMenu: missionsSorted.map((mission) => {
                const missionData = mission.data;
                const missionSlug = mission.slug;
                return {
                    title: missionData.title,
                    url: urlPath + slug + "/" + missionSlug,
                }
            }),
        };

        programsAndMissions.push(navLink);
    });

    independentMissions.map((mission) => {
        const { data, slug } = mission;

        const link: NavMenuLink = {
            title: data.title,
            url: "/misiones/" + slug,
        };

        programsAndMissions.push(link);
    });

    menu.subMenu = programsAndMissions;
    menu.icon = Rocket;

    return menu;
}