import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from "path"; // Import the 'path' module

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set the views directory for EJS templates
app.set("views", path.join(__dirname, "views")); // Assuming your EJS template is in a "views" folder
app.set("view engine", "ejs"); // Set EJS as the template engine

// Route handler for the root URL ("/")
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;

    // Render the "index.ejs" template with data
    res.render("index", {
      cocktail: result.drinks[0].strDrink,
      cocktailImage: result.drinks[0].strDrinkThumb,
      drink: result.drinks[0],
      cocktailIns: result.drinks[0].strInstructions,
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
