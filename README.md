[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License](https://img.shields.io/github/license/mutazen/Your-cocktail.svg?style=for-the-badge)][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mutazen/Your-cocktail">
    <img src="src/assets/logo-2.png" alt="Logo" width="300" height="150">
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

To acomplish our objective, this website is able to:
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
![Screen Shot Seaching by type 1][screenshot-search-type1]
![Screen Shot Seaching by type 2][screenshot-search-type2]
![Screen Shot Seaching by type 3][screenshot-search-type3]

### Search cocktail by category
![Screen Shot Seaching by category 1][screenshot-search-category1]
![Screen Shot Seaching by category 2][screenshot-search-category2]
![Screen Shot Seaching by category 3][screenshot-search-category3]

### Search cocktail by ingredient
![Screen Shot Seaching by ingredient 1][screenshot-search-ingredient1]
![Screen Shot Seaching by ingredient 2][screenshot-search-ingredient2]
![Screen Shot Seaching by ingredient 3][screenshot-search-ingredient3]

### Filter results by type
![Screen Shot Filer Results by type 1][screenshot-filter-type1]
![Screen Shot Filer Results by type 2][screenshot-filter-type2]

### Filter results by category
![Screen Shot Filer Results by category 1][screenshot-filter-category1]
![Screen Shot Filer Results by category 2][screenshot-filter-category2]

### Filter results by ingredient
![Screen Shot Filer Results by ingredient 1][screenshot-filter-ingredient1]
![Screen Shot Filer Results by ingredient 2][screenshot-filter-ingredient2]

### Show cocktail information
![Screen Shot Cocktail Information 1][screenshot-show-cocktail-info1]
![Screen Shot Cocktail Information 2][screenshot-show-cocktail-info2]

### Show ingredient information
![Screen Shot Ingredient Information 1][screenshot-show-ingredient-info1]
![Screen Shot Ingredient Information 2][screenshot-show-ingredient-info2]


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
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





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
[license-shield]: https://img.shields.io/github/license/mutazen/Your-cocktail.svg?style=for-the-badge
[license-url]: https://github.com/mutazen/Your-cocktail/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
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


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
