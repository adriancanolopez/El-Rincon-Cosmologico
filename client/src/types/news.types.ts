export interface News {
    title: string,
    description: string,
    image: File | null,
    published: boolean
}

export type CreateResponse = | { ok: true, data: News } | { ok: false, message: string };