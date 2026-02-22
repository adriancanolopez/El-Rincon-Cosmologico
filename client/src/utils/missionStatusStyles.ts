export default function getStatusStyles(status: string): string {
    let statusColor;

    switch (status) {
        case "En curso":
            statusColor = "text-blue-500";
            break;
        case "Activa":
            statusColor = "text-blue-500";
            break;
        case "Planificada":
            statusColor = "text-yellow-500";
            break;
        case "Abortada":
            statusColor = "text-orange-400";
            break;
        case "Exitosa":
            statusColor = "text-green-500";
            break;
        case "Fallida":
            statusColor = "text-red-500";
            break;
        default:
            statusColor = "text-gray-500";
            break;
    }

    return statusColor;
}