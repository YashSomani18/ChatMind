import { connect, disconnect } from "mongoose";
export const connectToDatabase = async () => {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB");
    }
};
export const disconnectFromDatabase = async () => {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Disconnect from database");
    }
};
//# sourceMappingURL=connection.js.map