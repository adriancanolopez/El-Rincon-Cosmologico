import Quill from "quill";
import 'quill/dist/quill.snow.css';

export const QUILL = new Quill("#editor", {
    theme: "snow",
    modules: {
        toolbar: [
            [{ "header": [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline"],
            ["link"],
            [{ "list": "ordered" }, { "list": "bullet" }],
            ["clean"]
        ]
    },
    placeholder: "Descripción de la noticia..."
});