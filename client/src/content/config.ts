import { defineCollection, z } from "astro:content";

const celestialBodies = defineCollection({
    schema : z.object({
        name: z.string(),
        type: z.enum(["estrella", "planeta", "satélite"]),
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
            })
        ).optional()
    })
});

export const collections = { 'celestial-bodies' : celestialBodies };