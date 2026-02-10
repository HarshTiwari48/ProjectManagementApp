import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//basic configuration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//cookie parser
app.use(cookieParser());


//cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173" ,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
}))

// import the routes
import healthCheckRouter from "./routes/healthCheck.routes.js";
import authRouter from "./routes/auth.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

export default app