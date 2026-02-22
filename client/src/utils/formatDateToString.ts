export default function formatDateToString(date : string): string {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Formato: 3 de febrero de 2026, 17:50:00
}

export function formatDateOnly(date : string): string {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }); // Formato: 3 de febrero de 2026
}

export function formatDate(date: string): string {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }); // Formato: dd/mm/yyyy
}