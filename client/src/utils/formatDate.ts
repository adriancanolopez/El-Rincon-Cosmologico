export default function formatDate(date : string): string {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}