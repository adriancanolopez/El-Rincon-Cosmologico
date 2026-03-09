import type { ImageData } from "../content/config";

export default function getMainImage(images: ImageData[] | undefined): ImageData | undefined {
    return images?.filter((image) => image.main)[0];
}