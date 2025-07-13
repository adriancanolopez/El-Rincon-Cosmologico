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
        orbital_velocity_kmh: z.number(),
        escape_velocity_kmh: z.number(),
        age: z.string(),
        temperature: z.object({
            min: z.number().optional(),
            max: z.number().optional(),
            surface: z.number().optional(),
            core: z.number().optional(),
        }),
        perihelion_km: z.number().optional(),
        aphelion_km: z.number().optional(),
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