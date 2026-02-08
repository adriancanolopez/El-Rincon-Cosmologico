export interface News {
    _id: string,
    title: string,
    slug: string,
    description: string,
    imageUrl: string | null,
    published: boolean,
    createdAt: string,
    updatedAt: string
};

export interface CreateNews {
    title: string,
    description: string,
    image: File | null,
    published: boolean
};

export interface UpdateNews {
    _id: string,
    title: string,
    description: string,
    image?: File,
    published: boolean
};

type ApiResponse<T> = { ok: true, data: T } | { ok: false, message: string };

export type CreateResponse = ApiResponse<News>;

export type UpdateResponse = ApiResponse<News>;

export type DeleteResponse = { ok: boolean, message: string };

export type GetNewsResponse = ApiResponse<News[]>;

export type GetOneResponse = ApiResponse<News>;