[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mutazen/Your-cocktail">
    <img src="src/assets/logo-2.png" alt="Logo" width="450" height="200">
  </a>

  <p align="center">
    The place where you can find the drink of your dreams
    <br />
    <a href="https://https://github.com/mutazen/Your-cocktail"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mutazen.github.io/Your-cocktail">View Demo</a>
    ·
    <a href="https://github.com/mutazen/Your-cocktail/issues">Report Bug</a>
    ·
    <a href="https://github.com/mutazen/Your-cocktail/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#search-cocktail-by-name">Search cocktails by name</a>
        </li>
        <li>
          <a href="#search-cocktail-by-type">Search cocktails by type</a>
        </li>
        <li>
          <a href="#search-cocktail-by-category">Search cocktails by category</a>
        </li>
        <li>
          <a href="#search-cocktail-by-ingredient">Search cocktails by ingredient</a>
        </li>
        <li>
          <a href="#filter-results-by-type">Filter results by type</a>
        </li>
        <li>
          <a href="#filter-results-by-category">Filter results by category</a>
        </li>
        <li>
          <a href="#filter-results-by-ingredient">Filter results by ingredient</a>
        </li>
        <li>
          <a href="#show-cocktail-information">Show cocktail information</a>
        </li>
        <li>
          <a href="#show-ingredient-information">Show ingredient information</a>
        </li>
        <li>
          <a href="#adapted-to-small-devices">Adapted to small devices</a>
        </li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Main Screen Shot][product-screenshot]

In simple words, we want to help everyone to find their favorite cocktail. In order to do that, we have developed this website to give them a way to search information about drinks based on their features. In an easy, simple and intuitive way.

To accomplish our objective, this website is able to:
* Search cocktail by name, type, category or ingredient.
* Filter search results by cocktail type, category or ingredient.
* Show information about cocktails features, their preparation instructions and their ingredients.
* Give ingredients details like a short description, type, if they have alcohol and alcohol by volume percentage.
* Be displayed in any device. 

We use TheCocktailDB's API as a source of information for this web site. Thanks to them, we are able to offer information about different cocktails and search based on their features.
<p align="center">
  <a href="https://www.thecocktaildb.com/api.php">https://www.thecocktaildb.com</a>
</p>

### Built With

* [Bootstrap](https://getbootstrap.com)
* [Vue.js](https://vuejs.org/)
* [Node.js](https://nodejs.org/es/)


<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mutazen/Your-cocktail.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change node version if it is necesary
   ```sh
   nvm use 14.7
   ```
4. Compile for development
   ```sh
   npm run serve
   ```

<!-- USAGE EXAMPLES -->
## Usage
### Search cocktail by name
<p>
  To search a cocktail by its name, we can introduce its name into the input in the right side of the navbar and press the enter key or click on the 
  magnifying glass button.
</p>
<p>
  In this example, we are going to search for cocktails with the word "smoothie" in their name. So we write "smoothie" in the input and press the enter key. 
</p>

![Screen Shot Seaching by name 1][screenshot-search-name1]

<p>
  In this new screen, we can see all the cocktails that we have in our database that containts the word "smoothie" in their name. In this case, there are 7 cocktails that match the pattern.
</p>

![Screen Shot Seaching by name 2][screenshot-search-name2]

### Search cocktail by type
<p>
  To search a cocktail by its type, we have to click on the "types" button in the left side of the navbar.
</p>

![Screen Shot Seaching by type 1][screenshot-search-type1]

<p>
  In the new screen, we can see the different types of cocktails: "Alcoholic", "Non alcoholic" and "Optional alcohol".
</p>
<p>
  The alcoholic cocktails are cocktails that have some percentage of alcohol, the non alcoholic cocktails don't have alcohol and optional alcohol cocktails could have alcohol or not.
</p>
<p>
  In this example, we are going to show alcoholic cocktails. So we just have to click on the "Alcoholic" option in the type list.
</p>

![Screen Shot Seaching by type 2][screenshot-search-type2]

<p>
  At the next screen, we can see the alcoholic cocktails that we have.
<p>
  If you pay attention to the filters at the left side of the screen, you can see that the "Alcoholic" option in the drink type list is selected. So if you want to see the other drink types options, you just have to click on them.
</p>
<p>
  As result of the search, we have 100 alcoholic cocktails to show.
</p>

![Screen Shot Seaching by type 3][screenshot-search-type3]

### Search cocktail by category
<p>
  To search a cocktail by its category, we have to click on the "category" button in the navbar.
</p>

![Screen Shot Seaching by category 1][screenshot-search-category1]

<p>
  At this new screen, we can see the cocktails category list. There are eleven different categories.
</p>
<p>
  In this example, we want to check the cocktails that belong to the "ordinary drink" category. So we click on the "ordinary drink" option in the categories list.
</p>

![Screen Shot Seaching by category 2][screenshot-search-category2]

<p>
  In this screen, we can see all the ordinary drink cocktails.
<p>
  If you pay attention to the filters at the left side of the screen, you can see that the "Ordinary drink" option in the category list is selected. So if you want to see the other categories options, you just have to click on them.
</p>
<p>
  In this case, we have 100 cocktails that belong to the "ordinary drink" category.
</p>

![Screen Shot Seaching by category 3][screenshot-search-category3]

### Search cocktail by ingredient
<p>
  To start to search a cocktail by its ingredient, we have to click on the "ingredient" button in the navbar.
</p>

![Screen Shot Seaching by ingredient 1][screenshot-search-ingredient1]

<p>
  In this screen, we can see a list of the different ingredient that are been used in the cocktails that we have registered.
</p>
<p>
  In this example, we are going to show cocktails that use "7-Up" as ingredient. So we just have to click on the "7-Up" card in the ingredient list.
</p>

![Screen Shot Seaching by ingredient 2][screenshot-search-ingredient2]


<p>
  At the new screen, we can see all the cocktails that use "7-Up" in their preparation.
<p>
  If you pay attention to the filters at the left side of the screen, you can see that the "7-Up" option in the ingredient list is selected. So if you want to see the other ingredient options, you just have to click on them.
</p>
<p>
  In this case, we just have 4 cocktails that have "7-Up" as one of their ingredients.
</p>

![Screen Shot Seaching by ingredient 3][screenshot-search-ingredient3]

### Filter results by type
<p>
  If we want to filter the results by cocktail type, we have to start searching cocktails using any other parameter.
</p>
<p>
  In this example, we have searched cocktails that have the word "coffee" on their names and we want to see how many of them have alcohol. So in the search result page, at the left controls, we click on the alcoholic option in the drink type list.
</p>

![Screen Shot Filer Results by type 1][screenshot-filter-type1]

<p>
  At the time that we clicked the option, we can observe that the cocktails displayed have changed. That is because it is showing cocktails that have "coffee" on their name and are alcoholic cocktails.
</p>
<p>
  As result of this filter, we have found 9 coffees that have alcohol. 
</p>

![Screen Shot Filer Results by type 2][screenshot-filter-type2]

### Filter results by category
<p>
  If we want to filter the results by cocktail category, we have to start searching cocktails using any other parameter.
</p>
<p>
  In this example, we have searched cocktails that have the word "coffee" on their names and we want to see how many of them belong to the "ordinary drink" category. So in the search result page, at the left controls, we click on the "ordinary drink" option in the category type list.
</p>

![Screen Shot Filer Results by category 1][screenshot-filter-category1]

<p>
  Once we have clicked the option, we can observe that the cocktails displayed have changed. That is because it is showing cocktails that have "coffee" on their name and that belongs to the "ordinary drink" category.
</p>
<p>
  We can observe that only one coffee that belong to the "ordinary drink" category. 
</p>

![Screen Shot Filer Results by category 2][screenshot-filter-category2]

### Filter results by ingredient
<p>
  To filter the search results by their ingredient, we have to start searching cocktails using any other parameter.
</p>
<p>
  In this example, we have searched cocktails that have 'alcoholic' on their type and we want to see how many of them use "amaretto" as ingredient in their preparation. So in the search result page, at the left controls, we click on the "amaretto" option in the ingredient type list.
</p>

![Screen Shot Filer Results by ingredient 1][screenshot-filter-ingredient1]

<p>
  At time that we have clicked the option, we can observe that the cocktails displayed have changed. That is because it is showing alcoholic cocktails that have "amaretto" as one of their ingredients.
</p>

![Screen Shot Filer Results by ingredient 2][screenshot-filter-ingredient2]

### Show cocktail information
<p>
  If we want more information about any cocktail, we only have to click on it in the seach cocktail page.
</p>
<p>
  In this example, we want to see more information about the cocktail named "110 in the shade". So we click on it.
</p>

![Screen Shot Cocktail Information 1][screenshot-show-cocktail-info1]

<p>
 In this new screen, we can see more information about the cocktail. Their name, category, type, type of glass used to serve it, preparation instruction and a list of ingredients with their measure
</p>

![Screen Shot Cocktail Information 2][screenshot-show-cocktail-info2]

### Show ingredient information
<p>
  If we want more information about certain ingredient, we only have to click on it in the cocktail detail page.
</p>
<p>
  In this example, we are in the cocktail which name is "110 in the shade" information page. In this page, we want more information about an ingredient called "Lager". So we click on it in the ingredient list. 
</p>

![Screen Shot Ingredient Information 1][screenshot-show-ingredient-info1]

<p>
 In this new screen, we can see more information about the ingredient "Lager". Their name, category, if it has alcohol, their alcohol by volume and description. Also we have a button to search cocktails that use this ingredient on their preparation. 
</p>

![Screen Shot Ingredient Information 2][screenshot-show-ingredient-info2]

### Adapted to small devices
<p>
 One of the fundamental goals of this website is to be able to be displayed on any device. So we started its design having in mind the mobile first concept.
</p>
<p>
 In order to that, we designed our home page to be very simple. So as it increases its width, we add more elements and we adapted them as long the width increase.
</p>
<p align="center">
  <img src="readme-images/mobilefirst-1.JPG" alt="Logo" width="500" height="450">
</p>
<p>
  To save more space we hide navbar button within a collapse element that can be open using a toggle button. Thank to this method the user can access to this controls when they need them or hide them when they aren´t useful. 
</p>
<p align="center">
  <img src="readme-images/mobilefirst-2.JPG" alt="Logo" width="500" height="450">
</p>
<p>
  In the search result page, we have the same problem that we have in the navbar. To solve it, we hide the filters controls to give all the space to show the search results in a better way. But we left a toggle button so the users are able to access to the filter controls if need them.
</p>
<p align="center">
  <img src="readme-images/mobilefirst-3.JPG" alt="Logo" width="500" height="450">
</p>
<p>
  We use a offcanvas element to show the filter controls. Thank to this technique, the user can see the control properly and make of them without any problem. 
</p>
<p align="center">
  <img src="readme-images/mobilefirst-4.JPG" alt="Logo" width="500" height="450">
</p>
<p>
 The pages that show information about cocktails and ingredients are ready to show all the information that they have in a proper way. Independently of user's device.
</p>
<p align="center">
  <img src="readme-images/mobilefirst-5.JPG" alt="Logo" width="325" height="470">
</p>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mutazen/Your-cocktail/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mutazen/Your-cocktail.svg?style=for-the-badge
[contributors-url]: https://github.com/mutazen/Your-cocktail/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mutazen/Your-cocktail.svg?style=for-the-badge
[forks-url]: https://github.com/mutazen/Your-cocktail/network/members
[stars-shield]: https://img.shields.io/github/stars/mutazen/Your-cocktail.svg?style=for-the-badge
[stars-url]: https://github.com/mutazen/Your-cocktail/stargazers
[issues-shield]: https://img.shields.io/github/issues/mutazen/Your-cocktail.svg?style=for-the-badge
[issues-url]: https://github.com/mutazen/Your-cocktail/issues
[license-shield]: https://img.shields.io/github/license/mutazen/Your-cocktail.svg?style=for-the-badge&
[license-url]: https://github.com/mutazen/Your-cocktail/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jeremycamacholugo/
[product-screenshot]: src/assets/screenshot.jpg
[screenshot-search-name1]: readme-images/screenshot-search-name1.jpg
[screenshot-search-name2]: readme-images/screenshot-search-name2.jpg
[screenshot-search-type1]: readme-images/screenshot-search-type1.jpg
[screenshot-search-type2]: readme-images/screenshot-search-type2.jpg
[screenshot-search-type3]: readme-images/screenshot-search-type3.jpg
[screenshot-search-category1]: readme-images/screenshot-search-category1.jpg
[screenshot-search-category2]: readme-images/screenshot-search-category2.jpg
[screenshot-search-category3]: readme-images/screenshot-search-category3.jpg
[screenshot-search-ingredient1]: readme-images/screenshot-search-ingredient1.jpg
[screenshot-search-ingredient2]: readme-images/screenshot-search-ingredient2.jpg
[screenshot-search-ingredient3]: readme-images/screenshot-search-ingredient3.jpg
[screenshot-filter-type1]: readme-images/screenshot-filter-type1.jpg
[screenshot-filter-type2]: readme-images/screenshot-filter-type2.jpg
[screenshot-filter-category1]: readme-images/screenshot-filter-category1.jpg
[screenshot-filter-category2]: readme-images/screenshot-filter-category2.jpg
[screenshot-filter-ingredient1]: readme-images/screenshot-filter-ingredient1.jpg
[screenshot-filter-ingredient2]: readme-images/screenshot-filter-ingredient2.jpg
[screenshot-show-cocktail-info1]: readme-images/screenshot-show-cocktail-info1.jpg
[screenshot-show-cocktail-info2]: readme-images/screenshot-show-cocktail-info2.jpg
[screenshot-show-ingredient-info1]: readme-images/screenshot-show-ingredient-info1.jpg
[screenshot-show-ingredient-info2]: readme-images/screenshot-show-ingredient-info2.jpg
