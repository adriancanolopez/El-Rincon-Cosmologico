import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: {
                values: ["editor", "admin"]
            },
            default: "editor",
            lowercase: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        collection: "users",
    }
);

const User = mongoose.model("User", userSchema);

export default User;