import authRouter from "./src/modules/auth/router.js";
import cors from "cors";

export const appRouter = (app, express) => {
  app.use(express.json());
  app.use(cors());
  // const whiteList = [
  //   "http://127.0.0.1:5500",
  //   "http://localhost:3000",
  // ];
  // app.use((req, res, next) => {
  //   if (!whiteList.includes(req.header("origin"))) {
  //     return next(new Error("Blocked By Cors!"));
  //   }
  //   {
  //     res.setHeader("Access-Control-Allow-Origin", "*");
  //     res.setHeader("Access-Control-Allow-Headers", "*");
  //     res.setHeader("Access-Control-Allow-Methods", "*");
  //     res.setHeader("Access-Control-Allow-Private-Networks", true);
  //     return next();
  //   }
  // });
  app.use("/auth", authRouter);

  // global Error
  app.use((error, req, res, next) => {
    return res.json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  });

  // not found page
  app.all("*", (req, res, next) => {
    return res.json({ success: false, message: "Page Not Found " });
  });
};
