import type { News, GetNewsResponse, CreateResponse, UpdateResponse, DeleteResponse } from "../types/news.types";

export async function getNews(limit?: number): Promise<GetNewsResponse> {
    const url = limit === undefined ? `http://localhost:3000/news/get-news` : `http://localhost:3000/news/get-news?limit=${limit}`;
    const request = await fetch(url);
    const data = await request.json();
    let response : GetNewsResponse;
    if (request.status === 200) {
        response = {ok: true, data};
    }
    else {
        response = {ok: false, message: data.message};
    }

    return response;
}

export async function getNewsPublished(limit?: number): Promise<GetNewsResponse> {
    const url = limit === undefined ? `http://localhost:3000/news/get-news-published` : `http://localhost:3000/news/get-news-published?limit=${limit}`;
    const request = await fetch(url);
    const data = await request.json();
    let response : GetNewsResponse;
    if (request.status === 200) {
        response = {ok: true, data};
    }
    else {
        response = {ok: false, message: data.message};
    }

    return response;
}

export async function createNews(news: News): Promise<CreateResponse> {

    const request = await fetch('http://localhost:3000/news/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news),
    });

    const data = await request.json();
    
    let response: CreateResponse;

    if (request.status === 201 ) {
        response = {ok: true, data: data};
    }
    else {
        response = {ok: false, message: data.message};
    }
    return response;
}

export async function createNewsWithImage(news: News): Promise<CreateResponse> {
    
    const formData = new FormData();
    const image = news.imageUrl as File;
    formData.append('title', news.title);
    formData.append('description', news.description);
    formData.append('image', image);
    formData.append('published', String(news.published));

    console.log(formData);

    const request = await fetch('http://localhost:3000/news/create-with-image', {
        method: 'POST',
        body: formData,
    });

    const data = await request.json();
    
    let response: CreateResponse;

    if (request.status === 201) {
        response = {ok: true, data: data};
    }
    else {
        response = {ok: false, message: data.message};
    }
    return response;
}

export async function updateNews(news: News): Promise<UpdateResponse> {

    const request = await fetch(`http://localhost:3000/news/update/${news._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news),
    });

    const data = await request.json();
    
    let response: UpdateResponse;

    if (request.ok) {
        response = {ok: true, data: data};
    }
    else {
        response = {ok: false, message: data.message};
    }
    return response;
}

export async function updateNewsWithImage(news: News): Promise<UpdateResponse> {
    
    const formData = new FormData();
    const image = news.imageUrl as File;
    formData.append('title', news.title);
    formData.append('description', news.description);
    formData.append('image', image);
    formData.append('published', String(news.published));

    console.log(formData);

    const request = await fetch(`http://localhost:3000/news/update-with-image/${news._id}`, {
        method: 'PATCH',
        body: formData,
    });

    const data = await request.json();
    
    let response: UpdateResponse;

    if (request.ok) {
        response = {ok: true, data: data};
    }
    else {
        response = {ok: false, message: data.message};
    }
    return response;
}

export async function deleteNews(id: string): Promise<DeleteResponse> {
    
    const request = await fetch(`http://localhost:3000/news/delete/${id}`, {
        method: 'DELETE'
    });

    const data = await request.json();

    const response: DeleteResponse = {ok: request.ok, message: data.message};

    return response;
}