# 🙏 Namaste-React:- Food-Ordering-App🔥
A Frontend food delivery application made using React and Swiggy's Live API.🚀
This project is made during the Namaste React Course Akshay Saini👩‍💻

## Tech Stack :-
- Frontend Library: React JS
- Bundler: Parcel
- Styling: Tailwind CSS
- Testing: Jest
- State Management: Redux-toolkit

## Features:- 
- Shimmer UI
- Add to cart
- Get restaurants by current location from Swiggy API & getting the live data.
- Display them with Area name, Cuisines Category and Ratings.
- Search Restaurants by Name.
- For any restaurant, you can checkout all the different type of dishes available with details and prices per quantity.
- Filter Top Rated Restuarants.


` Make sure you've enabled CORS extension installed in your browser while fetching Swiggy Live API `

# Parcel
Dev Build 🔗Local server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++;
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Spliting
Differential Building - support older browsers
Error Handling
HTTPs
Tree Shaking- remove unused code
Diffrent dev and prod bundles

# onifood
Header
---Logo
---Nav Items
Body
--RestaurantsContainer
--RestaurantCard
--Img
-- Name of Reso, star Rating, cuisine, delery tie
Footer
--Cpopyrights
--Links
--Address
--contacts


# Two types of Export / Import
-Default Export/Import

export default Components; import Components from "path";

-Named Export/Import

export const components; import {Components} from "path";

# React Hooks
(Normal JS utility functions) -useState()--> Superpowerful React variables -useEffect()

->Whenever State variables updates REact Rerender the components

# 2 Types Of Routing in web apps
-Client side Routing -Server side Routing

# Redux toolkit
- install @reduxjs/toolkit and react-redux
- build our store
- connect store wuth our app
- create slice (cartSlice)
- dispatch action
- reducer function 
- app is subscribed to our slice by selector which increaes the cart value


Two type of export/import

1. Default export/import

# export default "Component";
# import "cpmponent" from "path";

2. Named export/import

# export const component = anyThing;
# import {component} from "path";

# React Hooks
{Normall JS utility Function }, written by Facebook Developer

- usrState() - superpowerful react variables (whenever a state variable is update(change) react will re-renders the component) => {Reconciliation algorithm - (ReactFiber)}



- useEffect(() =>{} (a call back function), [] (a dependency array) ) - is a hook function which is a call back function which is called after the page is rendered.Every time a component(Header,body) is called, the rendering is done this function useEffect() is called.

// if no dependency array => useEffect is called in every render
    // if dependency array is emptuy = [] => useEffect is called only on initial render(just once)
    // if  dependency array is not empty = [searchText] => useEffect is called everytinme searchText is updated. 



- fetch() = it is a function which is provided by the web browser(javascript engine) to fetch the data from internet sites.

# Virtual DOM is in-memory representation of Real DOM. It is lightweight JavaScript object which is copy of Real DOM.

Updating virtual DOM in ReactJS is faster because ReactJS uses
Efficient diff algorithm
Batched update operations
Efficient update of sub tree only
Uses observable instead of dirty checking to detect change
ReactJS uses observable’s to find the modified components. Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it.

Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. Creating a whole tree is very fast so it does not affect the performance.

Once you render a JSX element, every single Virtual DOM object gets updated.Compared to updating real DOM objects, the Virtual DOM updates faster. Before updating, a copy of the virtual DOM is made and later compared with the updated Virtual DOM.

So at any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM. Then React can figure out which objects have been changed, and this process is called Diffing. Once React knows which objects to update, it updates only those objects in the Real DOM.

ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM.
ReactJS uses following steps to find the difference in both the Virtual DOM’s
1. Re-render all the children if parent state has changed. If the state of a component has changed, then ReactJS re-renders all the child components even if child components are not modified. To prevent the unwanted re-render of the child components we can use shouldComponentUpdate() component life cycle method. This will further help in boosting the performance.
2. Breadth First Search. ReactJS traverse the tree using BST. Consider the below tree. States of element B and H have changed. So when using BST ReactJS reached element B it will by default re-render the element H. This is the reason to use BST for tree traversal

3. Reconciliation. It is the process to determine which parts of the Real DOM need to be updated. It follow below steps:
Two elements of different types will produce different trees.

# Making use of Shimmer UI latest industrail practice.

# React Router DOM (liberary)- for creating different url pages
- command for installing it - npm i react-router-dom
- use function - createBrowserRouter()
- to provide this configuration we use an important component of react-router-dom liberary i.e. 
# RouterProvider


