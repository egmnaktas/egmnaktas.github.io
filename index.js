// Import necessary libraries
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Create an Express app
const app = express();
const port = 3000;

// API URL for fetching random cocktails
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define a route handler for the root URL ("/")
app.get("/", async (req, res) => {
  try {
    
    // Fetch data from the external API
    const response = await axios.get(API_URL);
    const result = response.data;
    
    // Render the EJS view and pass data to it
    res.render("pages/index.ejs", {cocktail: result.drinks[0].strDrink, cocktailImage: result.drinks[0].strDrinkThumb, drink: result.drinks[0], cocktailIns:  result.drinks[0].strInstructions});
  } catch (error) {
    console.error("Error fetching data from API:", error);
    // Render an error page or provide an error message to users
    res.status(500).send("Internal Server Error");
  }
})


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
