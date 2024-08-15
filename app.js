import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" })); // express.json use to set a limit to server.
app.use(express.urlencoded({ limit: "16kb", extended: true })); // express.urlencoded is use to manage a url.
app.use(express.static("public")); // express.static is provide to assets images etc to over folder public.
app.use(cookieParser()) //cookieParser is use to set a cookies in browser


//routes import
import userRouter from "../src/routes/user.routes.js" 


//routes declaration 
app.use("/api/v1/users",userRouter)
export { app };
