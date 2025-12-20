export interface News {
    title: string,
    description: string,
    imageUrl: File | null | string,
    published: boolean
}

export type CreateResponse = | { ok: true, data: News } | { ok: false, message: string };