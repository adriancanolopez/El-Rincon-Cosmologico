import type { News, CreateResponse } from "../types/news.types";

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
        response = {ok: false, message: data.message }
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
        response = {ok: false, message: data.message }
    }
    return response;
}

