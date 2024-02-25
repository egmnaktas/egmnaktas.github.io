# Mixology Magic

![MixologyMagic](https://github.com/egmnaktas/egmnaktas.github.io/assets/86255973/9b938417-e373-4219-a068-49b6c2186403)


This is a simple web application built with Node.js and Express.js that fetches a random cocktail recipe from an external API and displays it on a web page. It also lists the ingredients and instructions for making the cocktail.

## Prerequisites
Before you begin, ensure you have met the following requirements:

* Node.js installed on your machine.
* npm (Node Package Manager) installed on your machine.
## Installation
1. Clone the repository:

```
git clone https://github.com/your-username/cocktail-recipe-app.git
```
2. Change into the project directory:

```
cd cocktail-recipe-app
```
3. Install the project dependencies:

```
npm install
```
## Usage
1. Start the application:

```
npm start
```
The server will start and listen on port 3000 by default. You can access the application in your web browser at http://localhost:3000.

2. On the home page, you will see a random cocktail recipe, including its name, image, ingredients, and instructions.

## Technologies Used
* Node.js
* Express.js
* EJS (Embedded JavaScript) for templating
* Axios for making HTTP requests
* HTML and CSS for the front-end
# Folder Structure
* `views`: Contains EJS templates for rendering web pages.
* `public`: Contains static assets such as stylesheets and client-side JavaScript.
* `partials`: Contains shared EJS templates used across multiple pages.
* `app.js`: The main application file where Express is configured and routes are defined.
* `package.json` and `package-lock.json`: Define project dependencies and configuration.
## Acknowledgments
* [TheCocktailDB](https://www.thecocktaildb.com) for providing the cocktail data through their API.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
* Egemen Aktas
* GitHub: [egmnaktas](https://github.com/egmnaktas)
