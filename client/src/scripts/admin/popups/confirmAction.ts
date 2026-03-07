import type { CreateResponse, UpdateNews, DeleteResponse } from "../../../types/news.types";
import { deleteNews, updateNews, updateNewsWithImage } from "../../../api/NewsRequests";
import showPopup from "./showPopup";

const confirmDialog = document.querySelector("#confirm-popup") as HTMLDialogElement;
const confirmMessage = document.querySelector("#confirm-message") as HTMLParagraphElement;
const confirmButton = document.querySelector("#confirm-btn") as HTMLButtonElement;

const successDialog = document.querySelector("#success-popup") as HTMLDialogElement;
const successMessage = document.querySelector("#success-message") as HTMLParagraphElement;

const errorDialog = document.querySelector("#error-popup") as HTMLDialogElement;
const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;

export function deleteNewsPopup(message: string, idNews: string, nextFunction: Function) {

    showPopup(confirmDialog, confirmMessage, message);

    confirmButton.onclick = async () => {
        const response: DeleteResponse = await deleteNews(idNews);

        console.log(response);
        confirmDialog.close();

        if (response.ok) {
            showPopup(successDialog, successMessage, "Noticia eliminada con éxito.");
            nextFunction();
        }
        else {
            showPopup(errorDialog, errorMessage, response.message);
        }
    }
}

export function updateNewsPopup(message: string, news: UpdateNews) {
    
    showPopup(confirmDialog, confirmMessage, message);

    confirmButton.onclick = async () => {
        let response;
        if (!news.image) {
            response = await updateNews({_id: news._id, title: news.title, description: news.description, published: news.published});
        }
        else {
            response = await updateNewsWithImage({_id: news._id, title: news.title, description: news.description, image: news.image, published: news.published});
        }

        console.log(response);
        confirmDialog.close();

        if (response.ok) {
            showPopup(successDialog, successMessage, "Noticia editada con éxito.");
        }
        else {
            showPopup(errorDialog, errorMessage, response.message);
        }
    }
}

export function createNewsPopup(response: CreateResponse) {
    if (response.ok) {
        showPopup(successDialog, successMessage, "Noticia creada con éxito");
    }
    else {
        showPopup(errorDialog, errorMessage, response.message);
    }
}