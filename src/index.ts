import app from "./app";
import { config } from "dotenv";

config();
const PORT = 8080;
app.listen(PORT, () => console.log("Server listening on PORT", PORT));
