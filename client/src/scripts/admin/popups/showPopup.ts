export default function showPopup(popupElement: HTMLDialogElement, messageElement: HTMLParagraphElement, message: string): void {
    messageElement.innerHTML = message;
    popupElement.showModal();
}