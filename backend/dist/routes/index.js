import { Router } from "express";
import userRoute from "./userRoute.js";
import chatRoute from "./chatRoute.js";
const appRouter = Router();
appRouter.use("/user", userRoute);
appRouter.use("/chats", chatRoute);
export default appRouter;
//# sourceMappingURL=index.js.map