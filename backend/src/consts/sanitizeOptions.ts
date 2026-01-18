import type { IOptions } from "sanitize-html";

export const SANITIZE_OPTIONS: IOptions = {
    allowedTags: [
        'p', 'strong', 'b', 'u', 'i', 'em', 'a', 'ul', 'ol', 'li', 'br',
        'h1', 'h2', 'h3', 'h4', 
    ],
    allowedAttributes: {
        'a': ['href', 'target', 'rel'],
    }
};