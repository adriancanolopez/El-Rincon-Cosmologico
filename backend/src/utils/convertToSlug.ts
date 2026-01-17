export default function convertToSlug(text: string): string {
    return text.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    // Se separan los carácteres de sus acentos, se convierte el texto a minúsculas, se eliminan los diacríticos como las tildes, se reemplazan los espacios por guiones y se eliminan los caracteres que no sean letras, números o guiones.
}