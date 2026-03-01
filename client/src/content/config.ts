import { defineCollection, reference, z } from "astro:content";

const celestialBodies = defineCollection({
    schema : z.object({
        name: z.string(),
        type: z.enum(["estrella", "planeta", "planeta enano", "satélite"]),
        parent_planet: z.string().optional(),
        order: z.number(),
        mass: z.string(),
        diameter_km: z.number(),
        gravity: z.number(),
        orbital_period: z.string(),
        orbital_velocity_kms: z.number(),
        escape_velocity_kms: z.number(),
        age: z.string(),
        temperature: z.object({
            min: z.number().optional(),
            max: z.number().optional(),
            average: z.number().optional(), // En caso de que no se conozca la temperatura mínima, la máxima o ambas
            surface: z.number().optional(),
            core: z.number().optional(),
        }),
        periapsis_km: z.number().optional(), // Distancia mínima entre el cuerpo celeste y el cuerpo primario
        apoapsis_km: z.number().optional(), // Distancia máxima entre el cuerpo celeste y el cuerpo primario
        mean_earth_distance_AU: z.number().optional(),
        images: z.array(
            z.object({
                url: z.string(),
                description: z.string(),
                credits: z.string(),
            })
        ).optional(),
        iconImage: z.string().optional()
    })
});

const galaxyTypes = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        order: z.number(),
    })
});

const galaxies = defineCollection({
    schema: ({ image }) => z.object({
        name: z.string(),
        designations: z.array(z.string()).optional(),
        type: reference("galaxy-types"),
        hubble_sequence: z.string().optional(),
        main_catalogs: z.array(z.enum(["Messier", "NGC", "IC", "Caldwell"])).optional(),
        diameter_ly: z.number(), // En años luz
        mass_solar_masses: z.string().optional(),
        age_gyr: z.number().optional(), // Giga años (miles de millones de años)
        earth_distance_mly: z.number(), // En millones de años luz
        constellation: z.string(),
        apparent_magnitude: z.number().nullable(),
        stars_count_estimate: z.string().optional(),
        images: z.array(
            z.object({
                main: z.boolean().default(false),
                url: image(),
                description: z.string(),
                alt: z.string(),
                credits: z.string(),
            })
        ).optional(),
    })
});

const blackHoles = defineCollection({
    schema: ({ image }) => z.object({
        name: z.string(),
        designations: z.array(z.string()).optional(),
        type: z.enum(["Estelar", "Supermasivo", "Intermedio"]),
        mass_solar_masses: z.string(),
        diameter_km: z.number(),
        earth_distance_ly: z.number(),
        constellation: z.string(),
        apparent_magnitude: z.number().optional(),
        images: z.array(
            z.object({
                main: z.boolean().default(false),
                url: image(),
                description: z.string(),
                alt: z.string(),
                credits: z.string(),
            })
        ).optional(),
    })
});

const programs = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: image(),
            credits: z.string(),
        }).optional(),
    })
});

const missions = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        program: reference("programs").optional(),
        order: z.number(),
        type: z.enum(["Tripulada", "Orbital", "Aterrizaje", "Rover", "Sonda"]),
        launch_date: z.date().optional(),
        landing_date: z.date().optional(), // Opcional porque muchas sondas espaciales no aterrizan.
        status: z.enum(["En curso", "Activa", "Finalizada", "Planificada", "Abortada", "Exitosa", "Fallida"]),
        destination: z.string(),
        objective: z.string(),
        launch_vehicle: z.string(),
        crew: z.array(z.string()).optional(),
        images: z.array(
            z.object({
                main: z.boolean().default(false),
                url: image(),
                description: z.string(),
                credits: z.string(),
            })
        ).optional(),
    })
});

const categories = defineCollection({
    schema: z.object({
        title: z.string(),
    })
});

const articles = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        category: reference("categories"),
        images: z.array(
            z.object({
                main: z.boolean().default(false),
                url: image(),
                description: z.string(),
                credits: z.string(),
            })
        ).optional(),
    })
});

export const collections = { 'celestial-bodies' : celestialBodies, 'galaxy-types': galaxyTypes, galaxies, 'black-holes': blackHoles, programs, missions, categories, articles };