import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and Listeners
const PORT =  process.env.PORT ||3000;
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} is connected! `);
  });
}).catch(err => console.log(err)); 
