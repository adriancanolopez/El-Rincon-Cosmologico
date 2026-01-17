import mongoose, {Schema} from "mongoose";
import formatDate from "../utils/formatDate.ts";
import convertToSlug from "../utils/convertToSlug.ts";

const newsSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            unique: true,
            index: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            default: null
        },
        published: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
);

newsSchema.pre("save", async function() {
    if (!this.isModified("title")) return;

    const date: string = this.createdAt ? formatDate(this.createdAt as string) : formatDate(new Date().toISOString());

    this.slug = convertToSlug(`${this.title}-${date}`);
});

const News = mongoose.model("News", newsSchema);

export default News;