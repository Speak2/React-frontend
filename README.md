


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()

A Beach Resort web application that lets users browse through different types of rooms available. Users can check the price, room size, capacity, breakfast, and see if they can bring their pets. The project was inspired by [Airbnb](https://www.airbnb.com/). I put my own twist with it by developing the majority of the project with React Hooks and arrow functions.
 

### Built With


* [React Context API](https://reactjs.org/docs/context.html)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [React Router](https://reactrouter.com/web/guides/quick-start)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/willypark22/hotel-reservation-react.git
   ```
2. Install dependencies

   ```sh
   npm install react-router-dom
   ```

3. Run the localhost
   ```sh
   npm start
   ```



<!-- USAGE EXAMPLES -->
## Usage

### Browse Hotels

Look through the various different types of hotels available within the site. Users can see the price and the type of room that are in the fictitious beach resort. Each hotel information is dynamically loaded from the database using slug.

[![Product Name Screen Shot][browse-screenshot]]()


### Learn About Each Room

Users can view images and descriptions of each room. To save time, all the images are similar and the descriptions are created with Lorem Ipsum. The Info panel shows the room's price, size, capacity, and type of room. It will also say whether the room allows pets and if free breakfast is given. Each rooms information of a unique hotel is dynamically loaded from the database using hotel-slug

[![Product Name Screen Shot][detail-screenshot]]()


### Features

1. when api is fetching data from database there is a shimmer effect on the website
2. the website is responsive in both mobile and desktop view
3. Most of the information on the page is loaded from the database.
4. there is a base url that needs to be configured in the configuration folder json file.


### Desktop View


[![Product Name Screen Shot][filter-screenshot]]()


### Mobile View


[![Product Name Screen Shot][filters-screenshot]]()




<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [w3 Schools](https://www.w3schools.com/)
* [Claude AI](https://claude.ai/)
* [ChatGpt](https://chatgpt.com/ )



 
[product-screenshot]: ./src/resources/project.png
[browse-screenshot]: ./src/resources/browse%20hotels.png
[detail-screenshot]: ./src/resources/rooms.png
[filter-screenshot]: ./src/resources/desktop_view.png
[filters-screenshot]: ./src/resources/mobile_view.png