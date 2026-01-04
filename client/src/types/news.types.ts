export interface News {
    _id?: string,
    title: string,
    description: string,
    imageUrl?: File | null | string,
    published: boolean,
    createdAt?: string,
    updatedAt?: string
}

export type CreateResponse = | { ok: true, data: News } | { ok: false, message: string };

export type UpdateResponse = CreateResponse;

export type DeleteResponse = { ok: boolean, message: string };

export type GetNewsResponse = | { ok: true, data: News[] } | { ok: false, message: string };