import mongoose, {Schema} from "mongoose";

const newsSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
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

const News = mongoose.model("News", newsSchema);

export default News;