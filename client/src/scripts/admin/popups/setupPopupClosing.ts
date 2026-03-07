export default function setupPopupClosing(popupId: string, buttonId: string): void {
    const popup = document.querySelector(`#${popupId}`) as HTMLDialogElement;
    const closeBtn = document.querySelector(`#${buttonId}`) as HTMLButtonElement;

    if (popup && closeBtn) {
        closeBtn.addEventListener('click', () => popup.close());
    }
}