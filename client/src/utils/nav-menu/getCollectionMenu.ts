import type { CollectionEntry } from "astro:content";
import type { NavMenuLink } from "../../types/nav-menu-link";
import { MISSIONS, ARTICLES, DISCOVERIES, GALAXIES, BLACK_HOLES } from "../../consts/nav-menu-sections";

export function getMissionsMenu(programs: CollectionEntry<"programs">[], missions: CollectionEntry<"missions">[], independentMissions: CollectionEntry<"missions">[]): NavMenuLink {

    const programsAndMissions: NavMenuLink[] = [];

    programs.map((program) => {
        const { data, slug } = program;

        const programMissions = missions.filter((mission) => mission.data.program?.id === slug);
        const missionsSorted = programMissions.sort((a, b) => a.data.order - b.data.order); // Orden ascendente

        const navLink: NavMenuLink = {
            title: data.title,
            url: MISSIONS.url + slug,
            subMenu: missionsSorted.map((mission) => {
                const missionData = mission.data;
                const missionSlug = mission.slug;
                return {
                    title: missionData.title,
                    url: MISSIONS.url + slug + "/" + missionSlug,
                }
            }),
        };

        programsAndMissions.push(navLink);
    });

    independentMissions.map((mission) => {
        const { data, slug } = mission;

        const link: NavMenuLink = {
            title: data.title,
            url: MISSIONS.url + slug,
        };

        programsAndMissions.push(link);
    });

    MISSIONS.subMenu = programsAndMissions;

    return MISSIONS;
}

export function getArticlesMenu(categories: CollectionEntry<"categories">[], articles: CollectionEntry<"articles">[]): NavMenuLink {
    
    const categoriesAndArticles: NavMenuLink[] = [];

    categories.map((category) => {
        const { data, slug } = category;

        const categoryArticles = articles.filter((article) => article.data.category.id === slug);

        const navMenu: NavMenuLink = {
            title: data.title,
            url: ARTICLES.url + slug,
            subMenu: categoryArticles.map((article) => {
                const articleData = article.data;
                const articleSlug = article.slug;

                return {
                    title: articleData.title,
                    url: ARTICLES.url + slug + "/" + articleSlug,
                }
            })
        };

        categoriesAndArticles.push(navMenu);
    });

    ARTICLES.subMenu = categoriesAndArticles;

    return ARTICLES;
};

export function getDiscoveriesMenu(categories: CollectionEntry<"categories">[]): NavMenuLink {
    return DISCOVERIES;
};

export function getGalaxiesMenu(galaxyTypes: CollectionEntry<"galaxy-types">[], galaxies: CollectionEntry<"galaxies">[]): NavMenuLink {

    const typesAndGalaxies: NavMenuLink[] = [];

    galaxyTypes.map((type) => {
        const { data, slug } = type;

        const galaxiesInType = galaxies.filter((galaxy) => galaxy.data.type.id === slug);

        const navMenu: NavMenuLink = {
            title: data.name,
            url: GALAXIES.url + slug,
            subMenu: galaxiesInType.map((galaxy) => {
                const galaxyData = galaxy.data;
                const name = galaxyData.name;
                const galaxySlug = galaxy.slug;
                
                return {
                    title: name,
                    url: GALAXIES.url + slug + "/" + galaxySlug,
                };
            })
        }

        typesAndGalaxies.push(navMenu);
    });

    GALAXIES.subMenu = typesAndGalaxies;

    return GALAXIES;
}

export function getBlackHolesMenu(blackHolesCollection: CollectionEntry<"black-holes">[]): NavMenuLink {
    const blackHolesMenu: NavMenuLink[] = [];

    blackHolesCollection.map((blackHole) => {
        const { data, slug } = blackHole;
        const { name } = data;

        const link: NavMenuLink = {
            title: name,
            url: BLACK_HOLES.url + slug,
        }

        blackHolesMenu.push(link);
    });

    BLACK_HOLES.subMenu = blackHolesMenu;

    return BLACK_HOLES;
}