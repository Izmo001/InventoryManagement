import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import morgan from "morgan";
import helmet from "helmet"
import bodyParser from "body-parser";

/*ROUTE IMPORT */
import dashboardRoutes  from "./routes/DashboardRoutes";



/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


/* ROUTES */
app.use("/dashboard", dashboardRoutes);


/* SERVER */

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`server running on port ${port}`)
});

