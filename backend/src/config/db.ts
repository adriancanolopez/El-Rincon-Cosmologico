import mongoose, { Error } from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ Conexión exitosa a la base de datos.");
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error); // En caso de que sea un error lanzado por mongoose, error será una instancia de Error.
        console.error("❌ Error al conectarse a la base de datos. Error: " + message);
        process.exit(1);
    }
}

export default connectDB;